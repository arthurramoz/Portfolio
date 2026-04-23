'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  CarouselWrapper,
  NextButton,
  PrevButton,
  ProgressFill,
  ProgressTrack,
} from './styles';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [images.length, current, goNext]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  const progress = ((current + 1) / images.length) * 100;

  return (
    <>
      <CarouselWrapper>
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <PrevButton onClick={handlePrev}>
              <FiChevronLeft size={18} />
            </PrevButton>

            <NextButton onClick={handleNext}>
              <FiChevronRight size={18} />
            </NextButton>
          </>
        )}
      </CarouselWrapper>

      {images.length > 1 && (
        <ProgressTrack>
          <ProgressFill $progress={progress} />
        </ProgressTrack>
      )}
    </>
  );
};

export default ImageCarousel;
