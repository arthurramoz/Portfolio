'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Section,
  TitleWrapper,
  SectionTitle,
  SectionSubtitle,
  PhotoBioWrapper,
  PhotoWrap,
  BioColumn,
  BioParagraph,
  LocationCard,
  LocationPin,
  LocationInfo,
  LocationCountry,
  LocationState,
  LocationCity,
} from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="sobre-mim">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <TitleWrapper>
          <motion.div variants={itemVariants}>
            <SectionSubtitle>{t('who.subtitle' as Parameters<typeof t>[0])}</SectionSubtitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>{t('who.title' as Parameters<typeof t>[0])}</SectionTitle>
          </motion.div>
        </TitleWrapper>

        <PhotoBioWrapper>
          <motion.div variants={itemVariants}>
            <PhotoWrap>
              <Image
                src="/me/2.jpg"
                alt="Arthur Moreira Ramos"
                width={360}
                height={420}
                style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
                priority
              />
            </PhotoWrap>
          </motion.div>

          <BioColumn>
            <motion.div variants={itemVariants}>
              <BioParagraph>{t('who.bio.p1' as Parameters<typeof t>[0])}</BioParagraph>
            </motion.div>
            <motion.div variants={itemVariants}>
              <BioParagraph>{t('who.bio.p2' as Parameters<typeof t>[0])}</BioParagraph>
            </motion.div>

            <motion.div variants={itemVariants}>
              <LocationCard>
                <LocationPin>
                  <FiMapPin size={28} />
                </LocationPin>
                <LocationInfo>
                  <LocationCountry>Brasil 🇧🇷</LocationCountry>
                  <LocationState>São Paulo</LocationState>
                  <LocationCity>Mogi das Cruzes</LocationCity>
                </LocationInfo>
              </LocationCard>
            </motion.div>
          </BioColumn>
        </PhotoBioWrapper>
      </motion.div>
    </Section>
  );
};

export default About;

