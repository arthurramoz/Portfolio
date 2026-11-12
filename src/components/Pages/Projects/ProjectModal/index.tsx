'use client';

import { useEffect, useRef } from 'react';
import { FiClock, FiExternalLink, FiX, FiZap } from 'react-icons/fi';
import { useLanguage, type DictionaryKeys } from '@/contexts/LanguageContext';
import type { ProjectItem } from '@/config/projects';
import ImageCarousel from '../ImageCarousel';
import {
  Logo,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalFacts,
  ModalHeader,
  ModalLive,
  ModalOverlay,
  ModalRole,
  ModalSubheading,
  ModalTags,
  ModalTitle,
  PlatformSection,
  PlatformText,
  PlatformTitle,
  Tag,
} from '../styles';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useLanguage();
  const tr = (key: string) => t(key as DictionaryKeys);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const galleryLabels = {
    prevLabel: tr('projects.gallery.prev'),
    nextLabel: tr('projects.gallery.next'),
  };

  return (
    <ModalOverlay
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <ModalContent role="dialog" aria-modal="true" aria-label={project.title}>
        <ModalHeader>
          {project.logo && <Logo src={project.logo} alt="" />}
          <ModalTitle>{project.title}</ModalTitle>
          <ModalCloseButton
            ref={closeRef}
            type="button"
            aria-label={tr('projects.modal.close')}
            onClick={onClose}
          >
            <FiX size={18} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          {project.images && project.images.length > 0 && (
            <ImageCarousel
              images={project.images}
              alt={project.title}
              {...galleryLabels}
            />
          )}

          {project.roleKey && <ModalRole>{tr(project.roleKey)}</ModalRole>}

          <ModalDescription>{tr(project.descriptionKey)}</ModalDescription>

          {(project.highlightKey || project.durationKey) && (
            <ModalFacts>
              {project.highlightKey && (
                <li>
                  <FiZap size={14} aria-hidden="true" />
                  {tr(project.highlightKey)}
                </li>
              )}
              {project.durationKey && (
                <li>
                  <FiClock size={14} aria-hidden="true" />
                  {tr(project.durationKey)}
                </li>
              )}
            </ModalFacts>
          )}

          {project.link && (
            <ModalLive href={project.link} target="_blank" rel="noopener noreferrer">
              {tr('projects.card.live')}
              <FiExternalLink size={15} aria-hidden="true" />
            </ModalLive>
          )}

          <ModalSubheading>{tr('projects.modal.stack')}</ModalSubheading>
          <ModalTags>
            {project.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ModalTags>

          {project.platforms && project.platforms.length > 0 && (
            <>
              <ModalSubheading>{tr('projects.modal.platforms')}</ModalSubheading>

              {project.platforms.map(platform => (
                <PlatformSection key={platform.title}>
                  <PlatformTitle>{platform.title}</PlatformTitle>

                  {platform.images && platform.images.length > 0 && (
                    <ImageCarousel
                      images={platform.images}
                      alt={platform.title}
                      portrait={platform.portrait}
                      {...galleryLabels}
                    />
                  )}

                  <PlatformText>{tr(platform.descriptionKey)}</PlatformText>

                  {platform.featuresKey && (
                    <PlatformText>{tr(platform.featuresKey)}</PlatformText>
                  )}

                  <ModalTags>
                    {platform.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ModalTags>
                </PlatformSection>
              ))}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
