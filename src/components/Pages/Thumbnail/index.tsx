'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ThumbnailContainer,
  GridBackground,
  OrbPrimary,
  OrbSecondary,
  OrbAccent,
  CenterContent,
  LogoWrapper,
  LogoGlow,
  LogoSvg,
  TitleArea,
  MainTitle,
  Subtitle,
  TagsRow,
  Tag,
  FloatingCard,
  Vignette,
  BottomFade,
  TopFade,
  GlowLine,
} from './styles';

const TAGS = [
  'React',
  'Next.js',
  'TypeScript',
  'Styled-Components',
  'Framer Motion',
  'Responsive Design',
];

const FLOATING_CARDS = [
  {
    src: '/projects/popgov/1.png',
    alt: 'PopGov Dashboard',
    width: 280,
    height: 175,
    top: '6%',
    left: '4%',
    rotation: -6,
    delay: 0,
    floatIndex: 0,
  },
  {
    src: '/projects/certeza-seller/1.png',
    alt: 'Certeza Seller',
    width: 260,
    height: 160,
    top: '8%',
    right: '5%',
    rotation: 5,
    delay: 1,
    floatIndex: 1,
  },
  {
    src: '/projects/gotasks/1.png',
    alt: 'GoTasks App',
    width: 240,
    height: 150,
    top: '38%',
    left: '2%',
    rotation: -4,
    delay: 2,
    floatIndex: 2,
  },
  {
    src: '/projects/edugest/1.png',
    alt: 'EduGest Platform',
    width: 250,
    height: 155,
    top: '35%',
    right: '3%',
    rotation: 4,
    delay: 3,
    floatIndex: 0,
  },
  {
    src: '/projects/certeza-master/2.png',
    alt: 'Certeza Master',
    width: 270,
    height: 168,
    bottom: '8%',
    left: '6%',
    rotation: -3,
    delay: 4,
    floatIndex: 1,
  },
  {
    src: '/projects/certeza-cliente/1.png',
    alt: 'Certeza Client',
    width: 260,
    height: 162,
    bottom: '6%',
    right: '4%',
    rotation: 6,
    delay: 5,
    floatIndex: 2,
  },
  {
    src: '/projects/eleven-labs.jpg',
    alt: 'Eleven Labs',
    width: 200,
    height: 125,
    top: '12%',
    left: '30%',
    rotation: -2,
    delay: 6,
    floatIndex: 1,
    scale: 0.9,
  },
  {
    src: '/projects/first-portfolio.png',
    alt: 'First Portfolio',
    width: 200,
    height: 125,
    bottom: '14%',
    right: '28%',
    rotation: 3,
    delay: 7,
    floatIndex: 2,
    scale: 0.9,
  },
];

const ThumbnailPage = () => {
  return (
    <ThumbnailContainer>
      <GridBackground />
      <OrbPrimary />
      <OrbSecondary />
      <OrbAccent />

      {FLOATING_CARDS.map((card, i) => (
        <FloatingCard
          key={i}
          $top={card.top}
          $left={card.left}
          $right={card.right}
          $bottom={card.bottom}
          $rotation={card.rotation}
          $delay={card.delay}
          $floatIndex={card.floatIndex}
          $scale={card.scale}
        >
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            quality={85}
            style={{ objectFit: 'cover' }}
          />
        </FloatingCard>
      ))}

      <Vignette />
      <TopFade />
      <BottomFade />

      <CenterContent
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <LogoWrapper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LogoGlow />
          <LogoSvg>
            <Image
              src="/logo.png"
              alt="Arthur Ramos Logo"
              width={140}
              height={140}
              priority
              style={{ objectFit: 'contain' }}
            />
          </LogoSvg>
        </LogoWrapper>

        <TitleArea
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MainTitle>
            Arthur <span>Moreira Ramos</span>
          </MainTitle>
          <Subtitle>Frontend Developer</Subtitle>
        </TitleArea>

        <GlowLine
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <TagsRow
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {TAGS.map((tag, i) => (
            <Tag
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.06 }}
            >
              {tag}
            </Tag>
          ))}
        </TagsRow>
      </CenterContent>
    </ThumbnailContainer>
  );
};

export default ThumbnailPage;
