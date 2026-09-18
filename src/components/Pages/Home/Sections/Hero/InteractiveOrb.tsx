'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppTheme } from '@/contexts/ThemeContext';

const PARTICLE_COUNT = 2500;
const SPHERE_RADIUS = 200;
const DOT_SIZE_BASE = 1.5;
const BASE_ROTATION_SPEED = 0.00004;
const PERSPECTIVE = 400;
const MOUSE_DRAG = 0.0002;
const FRICTION = 0.98;

const WAVE_SPEED = 0.022;
const WAVE_HALF_WIDTH = 0.22;
const WAVE_DECAY = 0.983;
const WAVE_AMP_ENTER = 26;
const WAVE_AMP_MOVE = 10;
const WAVE_AMP_LEAVE = 18;
const WAVE_MAX_ANGLE = Math.PI * 0.88;
const MAX_WAVES = 5;
const MOVE_THROTTLE_MS = 380;

interface Particle {
  baseX: number;
  baseY: number;
  baseZ: number;
}

interface Wave {
  lx: number;
  ly: number;
  lz: number;
  ringAngle: number;
  amplitude: number;
}

const createParticles = (): Particle[] => {
  const particles: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;
    const n1 = Math.sin(theta * 3.0) * Math.cos(phi * 2.0) * 0.12;
    const r = SPHERE_RADIUS * (1 + n1);
    particles.push({
      baseX: r * Math.sin(theta) * Math.cos(phi),
      baseY: r * Math.sin(theta) * Math.sin(phi),
      baseZ: r * Math.cos(theta),
    });
  }
  return particles;
};

const InteractiveOrb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeMode } = useAppTheme();
  const mouseRef = useRef({ x: 9999, y: 9999 });
  const mouseDeltaRef = useRef({ dx: 0, dy: 0 });
  const rafRef = useRef<number>(0);
  const rotRef = useRef({ x: 0.3, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>(createParticles());
  const wavesRef = useRef<Wave[]>([]);
  const wasInsideRef = useRef(false);
  const lastMoveWaveRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    setIsVisible(true);

    const screenToLocal = (dx: number, dy: number): [number, number, number] => {
      const nx = dx / SPHERE_RADIUS;
      const ny = dy / SPHERE_RADIUS;
      const nzSq = 1 - nx * nx - ny * ny;
      const nz = nzSq > 0 ? Math.sqrt(nzSq) : 0;

      const { x: rotX, y: rotY } = rotRef.current;
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

      const lx = nx * cosY - ny * sinX * sinY + nz * cosX * sinY;
      const ly = ny * cosX + nz * sinX;
      const lz = -nx * sinY - ny * sinX * cosY + nz * cosX * cosY;

      return [lx * SPHERE_RADIUS, ly * SPHERE_RADIUS, lz * SPHERE_RADIUS];
    };

    const spawnWave = (dx: number, dy: number, amplitude: number) => {
      const [lx, ly, lz] = screenToLocal(dx, dy);
      wavesRef.current.push({ lx, ly, lz, ringAngle: 0, amplitude });
      if (wavesRef.current.length > MAX_WAVES) wavesRef.current.shift();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      if (mouseRef.current.x < 9000) {
        mouseDeltaRef.current.dx += newX - mouseRef.current.x;
        mouseDeltaRef.current.dy += newY - mouseRef.current.y;
      }

      mouseRef.current.x = newX;
      mouseRef.current.y = newY;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const sphereCx = w * 0.76;
      const sphereCy = h * 0.52;

      const dx = newX - sphereCx;
      const dy = newY - sphereCy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const isInside = dist < SPHERE_RADIUS;

      if (isInside && !wasInsideRef.current) {
        spawnWave(dx, dy, WAVE_AMP_ENTER);
      } else if (isInside) {
        const now = performance.now();
        if (now - lastMoveWaveRef.current > MOVE_THROTTLE_MS) {
          lastMoveWaveRef.current = now;
          spawnWave(dx, dy, WAVE_AMP_MOVE);
        }
      }

      wasInsideRef.current = isInside;
    };

    const handleMouseLeave = () => {
      if (wasInsideRef.current && mouseRef.current.x < 9000) {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        const sphereCx = w * 0.76;
        const sphereCy = h * 0.52;
        spawnWave(mouseRef.current.x - sphereCx, mouseRef.current.y - sphereCy, WAVE_AMP_LEAVE);
      }
      wasInsideRef.current = false;
      mouseRef.current.x = 9999;
      mouseRef.current.y = 9999;
      mouseDeltaRef.current.dx = 0;
      mouseDeltaRef.current.dy = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const isDark = themeMode === 'dark';
    const particles = particlesRef.current;

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      const sphereCx = w * 0.76;
      const sphereCy = h * 0.52;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const distToCenter = Math.sqrt((mx - sphereCx) ** 2 + (my - sphereCy) ** 2);

      if (distToCenter < SPHERE_RADIUS) {
        const mdx = mouseDeltaRef.current.dx;
        const mdy = mouseDeltaRef.current.dy;
        mouseDeltaRef.current.dx = 0;
        mouseDeltaRef.current.dy = 0;
        const speed = Math.sqrt(mdx * mdx + mdy * mdy);
        if (speed > 0.5) {
          const factor = Math.min(speed, 80) * MOUSE_DRAG;
          velRef.current.y += (mdx / speed) * factor;
          velRef.current.x += (mdy / speed) * factor;
        }
      } else {
        mouseDeltaRef.current.dx = 0;
        mouseDeltaRef.current.dy = 0;
      }

      velRef.current.x *= FRICTION;
      velRef.current.y *= FRICTION;
      rotRef.current.y += BASE_ROTATION_SPEED + velRef.current.y;
      rotRef.current.x += velRef.current.x;

      const rotY = rotRef.current.y;
      const rotX = rotRef.current.x;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      wavesRef.current = wavesRef.current.filter(
        wv => wv.amplitude > 0.4 && wv.ringAngle < WAVE_MAX_ANGLE,
      );

      const waveData = wavesRef.current.map(wv => {
        const drx_pre = wv.lx * cosY - wv.lz * sinY;
        const drz_pre = wv.lx * sinY + wv.lz * cosY;
        const dry = wv.ly * cosX - drz_pre * sinX;
        const drz = wv.ly * sinX + drz_pre * cosX;
        const drx = drx_pre;

        const cosBack  = Math.cos(Math.max(0, wv.ringAngle - WAVE_HALF_WIDTH));
        const cosFront = Math.cos(wv.ringAngle + WAVE_HALF_WIDTH);

        const amp = wv.amplitude;

        wv.ringAngle += WAVE_SPEED;
        wv.amplitude *= WAVE_DECAY;

        return { drx, dry, drz, cosBack, cosFront, amp };
      });

      ctx.clearRect(0, 0, w, h);

      const projected: { sx: number; sy: number; depth: number; dotSize: number }[] = [];
      const hasWaves = waveData.length > 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let rx = p.baseX * cosY - p.baseZ * sinY;
        let rz_temp = p.baseX * sinY + p.baseZ * cosY;
        let ry = p.baseY * cosX - rz_temp * sinX;
        let rz = p.baseY * sinX + rz_temp * cosX;

        if (hasWaves) {
          const rLen = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1;
          let totalDisp = 0;

          for (let w = 0; w < waveData.length; w++) {
            const wd = waveData[w];

            const dot = (rx * wd.drx + ry * wd.dry + rz * wd.drz) / (SPHERE_RADIUS * SPHERE_RADIUS);

            if (dot > wd.cosFront && dot < wd.cosBack) {
              const t = (dot - wd.cosFront) / (wd.cosBack - wd.cosFront);
              totalDisp += wd.amp * Math.sin(t * Math.PI);
            }
          }

          if (totalDisp !== 0) {
            rx += (rx / rLen) * totalDisp;
            ry += (ry / rLen) * totalDisp;
            rz += (rz / rLen) * totalDisp;
          }
        }

        const scale = PERSPECTIVE / (PERSPECTIVE + rz);
        const sx = sphereCx + rx * scale;
        const sy = sphereCy + ry * scale;
        const dotSize = DOT_SIZE_BASE * scale;
        const depth = (rz + SPHERE_RADIUS) / (2 * SPHERE_RADIUS);

        projected.push({ sx, sy, depth, dotSize });
      }

      projected.sort((a, b) => b.depth - a.depth);

      const BUCKETS_COUNT = 8;
      const buckets: typeof projected[] = Array.from({ length: BUCKETS_COUNT }, () => []);
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const bIndex = Math.max(0, Math.min(Math.floor((1 - p.depth) * BUCKETS_COUNT), BUCKETS_COUNT - 1));
        buckets[bIndex].push(p);
      }

      for (let b = 0; b < BUCKETS_COUNT; b++) {
        const list = buckets[b];
        if (list.length === 0) continue;

        const alpha = 0.08 + ((b + 0.5) / BUCKETS_COUNT) * 0.85;
        ctx.fillStyle = isDark
          ? `rgba(220, 240, 245, ${alpha})`
          : `rgba(30, 30, 35, ${alpha})`;

        ctx.beginPath();
        for (let j = 0; j < list.length; j++) {
          const { sx, sy, dotSize } = list[j];
          ctx.moveTo(sx + dotSize, sy);
          ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateSize);
    };
  }, [themeMode, isMounted]);

  if (!isMounted || isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    />
  );
};

export default InteractiveOrb;
