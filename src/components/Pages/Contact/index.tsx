'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiCheck,
  FiSend,
} from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  PageHeading,
  PageDescription,
} from '@/components/Pages/global';
import {
  ContactPage,
  ContactWatermark,
  ContactGrid,
  ContactInfo,
  InfoCardsWrapper,
  InfoCard,
  InfoCardIcon,
  InfoCardContent,
  InfoCardLabel,
  InfoCardValue,
  InfoCardArrow,
  ContactFormWrapper,
  FormGroup,
  FormInput,
  FormTextarea,
  FormButton,
  SuccessMessage,
  SuccessIcon,
  SuccessText,
} from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      delay: 0.3 + i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const CONTACT_INFO = [
  {
    icon: FiMail,
    labelKey: 'contact.email' as const,
    value: 'arthurmoreiraramos550sp@gmail.com',
    href: 'mailto:arthurmoreiraramos550sp@gmail.com',
    color: '#48cae4',
  },
  {
    icon: FiPhone,
    labelKey: 'contact.phone' as const,
    value: '(11) 94100-6962',
    href: 'tel:+5511941006962',
    color: '#fb6f92',
  },
  {
    icon: FiMapPin,
    labelKey: 'contact.location' as const,
    valueKey: 'contact.location.value' as const,
    href: 'https://maps.google.com/?q=São+Paulo,+SP,+Brasil',
    color: '#90e0ef',
  },
];

const Contact = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const portfolioIntro = {
      pt: 'Vim do seu portfólio!',
      en: 'I came from your portfolio!',
      fr: 'Je viens de votre portfolio !',
      es: '¡Vine de tu portafolio!',
      ru: 'Я пришёл с вашего портфолио!',
    };

    const nameLabels = {
      pt: 'Nome',
      en: 'Name',
      fr: 'Nom',
      es: 'Nombre',
      ru: 'Имя',
    };

    const messageLabels = {
      pt: 'Mensagem',
      en: 'Message',
      fr: 'Message',
      es: 'Mensaje',
      ru: 'Сообщение',
    };

    const currentLanguage = language || 'pt';
    const intro = portfolioIntro[currentLanguage] || portfolioIntro.pt;
    const nameLabel = nameLabels[currentLanguage] || nameLabels.pt;
    const messageLabel = messageLabels[currentLanguage] || messageLabels.pt;

    const phone = '5511941006962';
    const text = `${intro}\n\n${nameLabel}: ${formState.name}\n${messageLabel}: ${formState.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setFormState({ name: '', message: '' });
  };

  const handleReset = () => {
    setStatus('idle');
  };

  return (
    <ContactPage>
      <ContactWatermark
        initial={{ opacity: 0, scale: 0.95, x: '-50%' }}
        animate={{ opacity: 0.03, scale: 1, x: '-50%' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {t('contact.watermark' as Parameters<typeof t>[0])}
      </ContactWatermark>

      <ContactGrid>
        <ContactInfo
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PageHeading variants={itemVariants}>
            {t('contact.title' as Parameters<typeof t>[0])}
          </PageHeading>

          <PageDescription variants={itemVariants}>
            {t('contact.subtitle' as Parameters<typeof t>[0])}
          </PageDescription>

          <InfoCardsWrapper variants={itemVariants}>
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon;
              return (
                <InfoCard
                  key={info.labelKey}
                  href={info.href}
                  target={info.labelKey === 'contact.location' ? '_blank' : undefined}
                  rel={info.labelKey === 'contact.location' ? 'noopener noreferrer' : undefined}
                  as={motion.a}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <InfoCardIcon $color={info.color}>
                    <Icon size={24} />
                  </InfoCardIcon>
                  <InfoCardContent>
                    <InfoCardLabel>
                      {t(info.labelKey as Parameters<typeof t>[0])}
                    </InfoCardLabel>
                    <InfoCardValue>
                      {'valueKey' in info && info.valueKey
                        ? t(info.valueKey as Parameters<typeof t>[0])
                        : info.value}
                    </InfoCardValue>
                  </InfoCardContent>
                  <InfoCardArrow>
                    <FiArrowUpRight size={16} />
                  </InfoCardArrow>
                </InfoCard>
              );
            })}
          </InfoCardsWrapper>
        </ContactInfo>

        <ContactFormWrapper
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <SuccessMessage
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <SuccessIcon
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.15,
                  }}
                >
                  <FiCheck size={32} />
                </SuccessIcon>
                <SuccessText>
                  {t('contact.form.success' as Parameters<typeof t>[0])}
                </SuccessText>
                <FormButton
                  onClick={handleReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: 'auto', padding: '12px 32px' }}
                >
                  {t('contact.tag' as Parameters<typeof t>[0])}
                </FormButton>
              </SuccessMessage>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FormGroup>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                  >
                    <FormInput
                      type="text"
                      placeholder={t('contact.form.name' as Parameters<typeof t>[0])}
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
                  >
                    <FormTextarea
                      placeholder={t('contact.form.message' as Parameters<typeof t>[0])}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
                  >
                    <FormButton
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'sending' ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          ...
                        </motion.span>
                      ) : (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                          {t('contact.form.submit' as Parameters<typeof t>[0])}
                          <FiSend size={16} />
                        </span>
                      )}
                    </FormButton>
                  </motion.div>
                </FormGroup>
              </motion.form>
            )}
          </AnimatePresence>
        </ContactFormWrapper>
      </ContactGrid>
    </ContactPage>
  );
};

export default Contact;
