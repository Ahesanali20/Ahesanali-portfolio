import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react/dist/cjs/lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../ui/github";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-sm transition-shadow duration-300 hover:shadow-(--color-accent-shadow) hover:shadow-xl"
    >
      {/* Project Image */}
      <div className="relative aspect-video shrink-0 overflow-hidden bg-(--color-background)">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-(--color-text-secondary)">
            No preview available
          </div>
        )}

        {/* Category */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full border border-(--color-border) bg-(--color-surface)/90 px-3 py-1.5 text-xs font-semibold text-(--color-accent) shadow-sm backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-(--color-text-primary)">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-(--color-text-secondary)">
              {project.description}
            </p>
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="shrink-0 rounded-lg p-2 text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
            aria-label={`View ${project.title} details`}
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-(--color-border) bg-(--color-background) px-2.5 py-1.5 text-xs font-medium text-(--color-text-secondary)"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-lg border border-(--color-border) bg-(--color-background) px-2.5 py-1.5 text-xs font-medium text-(--color-text-secondary)">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-3 border-t border-(--color-border) pt-5">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-4 py-2.5 text-sm font-semibold text-(--color-button-text) transition hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
          >
            View Details
            <ArrowUpRight size={16} />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm font-semibold text-(--color-text-primary) transition hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm font-semibold text-(--color-text-primary) transition hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
