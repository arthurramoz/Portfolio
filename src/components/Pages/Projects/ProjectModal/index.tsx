'use client';

import { useEffect, useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectItem } from '@/config/projects';
import ImageCarousel from '../ImageCarousel';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalDescription,
  ModalDivider,
  PlatformSection,
  PlatformTitle,
  PlatformDescription,
  PlatformFeatures,
  PlatformRoleBadge,
  PlatformCarouselWrapper,
  TagsRow,
  Tag,
  InfoPillsRow,
  InfoPill,
} from '../styles';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{project.title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FiX size={18} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <ModalDescription>
            {t(project.descriptionKey as Parameters<typeof t>[0])}
          </ModalDescription>

          {(project.roleKey || project.duration || project.highlightKey) && (
            <InfoPillsRow>
              {project.roleKey && (
                <InfoPill>
                  <strong>{t('projects.pill.role' as Parameters<typeof t>[0])}:</strong>
                  {t(project.roleKey as Parameters<typeof t>[0])}
                </InfoPill>
              )}
              {project.duration && (
                <InfoPill>
                  <strong>{t('projects.pill.duration' as Parameters<typeof t>[0])}:</strong>
                  {project.duration}
                </InfoPill>
              )}
              {project.highlightKey && (
                <InfoPill>
                  <strong>{t('projects.pill.highlight' as Parameters<typeof t>[0])}:</strong>
                  {t(project.highlightKey as Parameters<typeof t>[0])}
                </InfoPill>
              )}
            </InfoPillsRow>
          )}

          <TagsRow>
            {project.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsRow>

          {project.platforms && project.platforms.length > 0 && (
            <>
              <ModalDivider />

              {project.platforms.map((platform, idx) => (
                <PlatformSection key={idx}>
                  <PlatformTitle>{platform.title}</PlatformTitle>

                  {platform.images && platform.images.length > 0 && (
                    <PlatformCarouselWrapper>
                      <ImageCarousel
                        images={platform.images}
                        alt={platform.title}
                      />
                    </PlatformCarouselWrapper>
                  )}

                  <PlatformDescription>
                    {t(platform.descriptionKey as Parameters<typeof t>[0])}
                  </PlatformDescription>

                  {platform.roleKey && (
                    <PlatformRoleBadge>
                      {t(platform.roleKey as Parameters<typeof t>[0])}
                    </PlatformRoleBadge>
                  )}

                  {platform.featuresKey && (
                    <PlatformFeatures>
                      {t(platform.featuresKey as Parameters<typeof t>[0])}
                    </PlatformFeatures>
                  )}

                  <TagsRow>
                    {platform.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagsRow>
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
