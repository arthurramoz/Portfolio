'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Actions,
  Content,
  Description,
  Greeting,
  IllustrationBlock,
  Name,
  PrimaryButton,
  Role,
  SecondaryButton,
  Section,
  TextBlock,
} from './styles';

const Hero = () => {
  return (
    <Section>
      <Content>
        <TextBlock>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
          >
            <Greeting>Olá, eu sou</Greeting>
            <Name>Arthur Moreira Ramos</Name>
            <Role>Desenvolvedor Full Stack</Role>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
          >
            <Description>
              Criando experiências digitais modernas e elegantes com foco em
              performance e design.
            </Description>

            <Actions>
              <PrimaryButton>Ver projetos</PrimaryButton>
              <SecondaryButton>Falar comigo</SecondaryButton>
            </Actions>
          </motion.div>
        </TextBlock>

        <IllustrationBlock>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/elements/about-me.svg"
                alt="Ilustração de desenvolvedor"
                width={700}
                height={700}
                priority
              />
            </motion.div>
          </motion.div>
        </IllustrationBlock>
      </Content>
    </Section>
  );
};

export default Hero;
