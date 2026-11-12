'use client';

import {
  FiArrowRight,
  FiBox,
  FiClock,
  FiExternalLink,
  FiGrid,
  FiLayers,
  FiLayout,
  FiMoreHorizontal,
  FiShoppingCart,
  FiZap,
} from 'react-icons/fi';
import { useLanguage, type DictionaryKeys } from '@/contexts/LanguageContext';
import type { ProjectItem, ProjectType } from '@/config/projects';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardPlaceholder,
  CardRole,
  CardTags,
  CardTitle,
  CardYear,
  DetailsLink,
  Facts,
  LiveLink,
  Logo,
  Tag,
  TypeBadge,
} from '../styles';

const TYPE_ICONS: Record<ProjectType, typeof FiShoppingCart> = {
  ecommerce: FiShoppingCart,
  dashboard: FiGrid,
  landing: FiLayout,
  saas: FiBox,
  other: FiMoreHorizontal,
};

const MAX_TAGS = 4;

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: (project: ProjectItem) => void;
  /** Card maior: descrição com mais linhas */
  featured?: boolean;
  /** Primeira dobra: carrega a imagem sem lazy */
  priority?: boolean;
}

const ProjectCard = ({ project, onOpen, featured, priority }: ProjectCardProps) => {
  const { t } = useLanguage();
  const tr = (key: string) => t(key as DictionaryKeys);

  const image = project.cover ?? project.images?.[0];
  const TypeIcon = TYPE_ICONS[project.projectType];
  const extraTags = project.tags.length - MAX_TAGS;

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-label={`${project.title}: ${tr('projects.card.details')}`}
      onClick={() => onOpen(project)}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(project);
        }
      }}
    >
      <CardMedia $type={project.projectType} $empty={!image}>
        {image ? (
          <img
            src={image}
            alt={project.title}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : (
          <CardPlaceholder $type={project.projectType}>
            <TypeIcon size={32} aria-hidden="true" />
            <strong>{project.title}</strong>
          </CardPlaceholder>
        )}
      </CardMedia>

      <CardBody>
        <TypeBadge $type={project.projectType}>
          {tr(`projects.type.${project.projectType}`)}
        </TypeBadge>

        <CardHeader>
          {project.logo && <Logo src={project.logo} alt="" loading="lazy" />}
          <CardTitle>{project.title}</CardTitle>
          <CardYear>{project.year}</CardYear>
        </CardHeader>

        {project.roleKey && <CardRole>{tr(project.roleKey)}</CardRole>}

        <CardDescription $lines={featured ? 3 : 2}>
          {tr(project.descriptionKey)}
        </CardDescription>

        {(project.highlightKey || project.durationKey || project.platforms) && (
          <Facts>
            {project.highlightKey && (
              <li>
                <FiZap size={13} aria-hidden="true" />
                {tr(project.highlightKey)}
              </li>
            )}
            {project.durationKey && (
              <li>
                <FiClock size={13} aria-hidden="true" />
                {tr(project.durationKey)}
              </li>
            )}
            {project.platforms && project.platforms.length > 1 && (
              <li>
                <FiLayers size={13} aria-hidden="true" />
                {project.platforms.length} {tr('projects.platforms')}
              </li>
            )}
          </Facts>
        )}

        <CardTags>
          {project.tags.slice(0, MAX_TAGS).map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {extraTags > 0 && <Tag>+{extraTags}</Tag>}
        </CardTags>

        <CardFooter>
          <DetailsLink>
            {tr('projects.card.details')}
            <FiArrowRight size={15} aria-hidden="true" />
          </DetailsLink>

          {project.link && (
            <LiveLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={event => event.stopPropagation()}
              onKeyDown={event => event.stopPropagation()}
            >
              {tr('projects.card.live')}
              <FiExternalLink size={13} aria-hidden="true" />
            </LiveLink>
          )}
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
