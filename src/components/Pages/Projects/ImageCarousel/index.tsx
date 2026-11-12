'use client';

import { useCallback, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Counter,
  GalleryWrapper,
  NextButton,
  PrevButton,
  Slide,
  Track,
} from './styles';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  /** Prints de celular: várias telas lado a lado */
  portrait?: boolean;
  prevLabel?: string;
  nextLabel?: string;
}

/**
 * Galeria com scroll-snap nativo: arrastar no toque, setas no desktop.
 * Sem timers nem animação em JS, e as imagens carregam sob demanda.
 */
const ImageCarousel = ({
  images,
  alt,
  portrait,
  prevLabel = 'Previous image',
  nextLabel = 'Next image',
}: ImageCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const [current, setCurrent] = useState(0);

  const handleScroll = useCallback(() => {
    if (portrait) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;
      setCurrent(Math.round(track.scrollLeft / track.clientWidth));
    });
  }, [portrait]);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const step = portrait ? track.clientWidth * 0.8 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  const hasMany = images.length > 1;

  return (
    <GalleryWrapper>
      <Track ref={trackRef} $portrait={portrait} onScroll={handleScroll}>
        {images.map((src, index) => (
          <Slide key={src} $portrait={portrait}>
            <img
              src={src}
              alt={`${alt} ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </Slide>
        ))}
      </Track>

      {hasMany && (
        <>
          <PrevButton
            type="button"
            aria-label={prevLabel}
            onClick={() => scrollByPage(-1)}
          >
            <FiChevronLeft size={20} />
          </PrevButton>
          <NextButton
            type="button"
            aria-label={nextLabel}
            onClick={() => scrollByPage(1)}
          >
            <FiChevronRight size={20} />
          </NextButton>
          {!portrait && (
            <Counter>
              {current + 1} / {images.length}
            </Counter>
          )}
        </>
      )}
    </GalleryWrapper>
  );
};

export default ImageCarousel;
