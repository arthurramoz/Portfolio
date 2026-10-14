'use client';

import { useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { FiDownload, FiX, FiFileText } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Backdrop,
  ModalContainer,
  MobileDragHandle,
  ModalHeader,
  HeaderContent,
  HeaderTitleRow,
  HeaderIconWrap,
  ModalTitle,
  ModalSubtitle,
  CloseButton,
  OptionsList,
  OptionCard,
  OptionFlag,
  OptionDetails,
  OptionTitle,
  OptionMeta,
  DownloadPill,
  ModalFooterNote,
} from './styles';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TranslationKey = Parameters<ReturnType<typeof useLanguage>['t']>[0];

const EASE = [0.16, 1, 0.3, 1] as const;

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const { t, language } = useLanguage();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const getSubtitle = () => {
    switch (language) {
      case 'en':
        return 'Select the preferred language to view or download the updated resume.';
      case 'es':
        return 'Seleccione el idioma deseado para ver o descargar el currículum actualizado.';
      case 'fr':
        return 'Sélectionnez la langue souhaitée pour afficher ou télécharger le CV à jour.';
      case 'ru':
        return 'Выберите язык для просмотра или скачивания актуального резюме.';
      case 'pt':
      default:
        return 'Selecione o idioma desejado para visualizar ou baixar o currículo atualizado.';
    }
  };

  const getDownloadLabel = () => {
    switch (language) {
      case 'en':
        return 'Download';
      case 'es':
        return 'Descargar';
      case 'fr':
        return 'Télécharger';
      case 'ru':
        return 'Скачать';
      case 'pt':
      default:
        return 'Baixar';
    }
  };

  const getFooterNote = () => {
    switch (language) {
      case 'en':
        return 'Optimized for ATS screening and technical recruiter reviews.';
      case 'es':
        return 'Optimizado para sistemas ATS y revisión por reclutadores técnicos.';
      case 'fr':
        return 'Optimisé pour les systèmes ATS et la lecture par des recruteurs techniques.';
      case 'ru':
        return 'Оптимизировано для систем ATS и технического рекрутинга.';
      case 'pt':
      default:
        return 'Formatos otimizados para ATS e avaliação de recrutadores técnicos.';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <ModalContainer
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE }}
            onClick={e => e.stopPropagation()}
          >
            <MobileDragHandle aria-hidden="true" />

            <ModalHeader>
              <HeaderContent>
                <HeaderTitleRow>
                  <HeaderIconWrap aria-hidden="true">
                    <FiFileText size={18} />
                  </HeaderIconWrap>
                  <ModalTitle id="resume-modal-title">
                    {t('hero.btn.resume' as TranslationKey)}
                  </ModalTitle>
                </HeaderTitleRow>
                <ModalSubtitle>{getSubtitle()}</ModalSubtitle>
              </HeaderContent>

              <CloseButton
                type="button"
                onClick={onClose}
                aria-label="Fechar modal"
                title="Fechar"
              >
                <FiX size={18} />
              </CloseButton>
            </ModalHeader>

            <OptionsList>
              <OptionCard
                href="/resume/Arthur%20Moreira%20Ramos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arthur Moreira Ramos - Curriculo.pdf"
                onClick={() => {
                  setTimeout(onClose, 250);
                }}
              >
                <OptionFlag
                  src="https://flagcdn.com/w80/br.png"
                  alt="Bandeira do Brasil"
                  width={34}
                  height={24}
                />
                <OptionDetails>
                  <OptionTitle>
                    {t('hero.btn.resume.pt' as TranslationKey)} (Brasil)
                  </OptionTitle>
                  <OptionMeta>PDF • PT-BR • Atualizado 2026</OptionMeta>
                </OptionDetails>
                <DownloadPill>
                  <FiDownload size={14} aria-hidden="true" />
                  <span>{getDownloadLabel()}</span>
                </DownloadPill>
              </OptionCard>

              <OptionCard
                href="/resume/Arthur%20Moreira%20Ramos%20English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arthur Moreira Ramos - Resume.pdf"
                onClick={() => {
                  setTimeout(onClose, 250);
                }}
              >
                <OptionFlag
                  src="https://flagcdn.com/w80/us.png"
                  alt="US Flag"
                  width={34}
                  height={24}
                />
                <OptionDetails>
                  <OptionTitle>
                    {t('hero.btn.resume.en' as TranslationKey)} (Global / US)
                  </OptionTitle>
                  <OptionMeta>PDF • EN-US • Remote & International</OptionMeta>
                </OptionDetails>
                <DownloadPill>
                  <FiDownload size={14} aria-hidden="true" />
                  <span>{getDownloadLabel()}</span>
                </DownloadPill>
              </OptionCard>
            </OptionsList>

            <ModalFooterNote>{getFooterNote()}</ModalFooterNote>
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
