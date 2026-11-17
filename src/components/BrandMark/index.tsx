'use client';

import styled from 'styled-components';

interface BrandMarkProps {
  /** Largura em px; a altura segue a proporção do símbolo. */
  size?: number;
  /** Cor do "A". Padrão: theme.colors.brandInk (muda com o tema). */
  ink?: string;
  /** Cor do ponto ".digital". Padrão: theme.colors.brandDot. */
  dot?: string;
  /** Texto acessível. Sem ele, o símbolo é decorativo (aria-hidden). */
  label?: string;
}

const Svg = styled.svg<{ $ink?: string; $dot?: string }>`
  display: block;
  flex-shrink: 0;

  g {
    stroke: ${({ theme, $ink }) => $ink ?? theme.colors.brandInk};
  }

  circle {
    fill: ${({ theme, $dot }) => $dot ?? theme.colors.brandDot};
  }
`;

/** Símbolo da marca Arthur Ramos Digital: o "A" em arco + o ponto ".digital". */
export default function BrandMark({ size = 32, ink, dot, label }: BrandMarkProps) {
  return (
    <Svg
      viewBox="5 2 104 96"
      width={size}
      height={Math.round((size * 96) / 104)}
      $ink={ink}
      $dot={dot}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <g fill="none" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 84C24 42 33 16 48 16C63 16 72 42 80 84" />
        <path d="M18.9 69.6C26 60 35 58.5 46 58.5C57 58.5 64 59 73.7 55.7" />
      </g>
      <circle cx="98" cy="84" r="7" />
    </Svg>
  );
}
