'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Grid,
  ImageCell,
  Section,
  SectionSubtitle,
  SectionTitle,
  TitleWrapper,
} from './styles';

const PHOTOS = [
  { src: '/me/primary.jpg', alt: 'Arthur Ramos' },
  { src: '/me/2.jpg', alt: 'Arthur Ramos' },
  { src: '/me/3.jpg', alt: 'Arthur Ramos' },
  { src: '/me/4.jpg', alt: 'Arthur Ramos' },
  { src: '/me/5.jpg', alt: 'Arthur Ramos' },
  { src: '/me/6.jpg', alt: 'Arthur Ramos' },
];

const Gallery = () => {
  const { t } = useLanguage();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <Section id="galeria">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <TitleWrapper>
          <motion.div variants={itemVariants}>
            <SectionSubtitle>{t('gallery.subtitle')}</SectionSubtitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>{t('gallery.title')}</SectionTitle>
          </motion.div>
        </TitleWrapper>

        <motion.div variants={itemVariants}>
          <Grid>
            {PHOTOS.map((photo, index) => (
              <ImageCell key={index}>
                <img src={photo.src} alt={photo.alt} />
              </ImageCell>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Gallery;
