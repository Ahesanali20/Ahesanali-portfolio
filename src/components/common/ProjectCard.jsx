import { ArrowUpRight } from "lucide-react/dist/cjs/lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../ui/github";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-surface) shadow-(--color-accent-shadow) shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-(--color-accent-soft)">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 opacity-80 transition duration-300 group-hover:bg-black/10" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-(--color-accent) uppercase">
              {project.category}
            </span>

            <h3 className="mt-2 text-xl font-semibold text-(--color-text-primary)">
              {project.title}
            </h3>
          </div>

          <Link
            to={`/projects/${project.id}`}
            aria-label={`View ${project.title}`}
            className="rounded-xl border border-(--color-border) p-2.5 text-(--color-text-secondary) transition hover:border-(--color-accent) hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-(--color-text-secondary)">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-(--color-border) bg-(--color-background) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary)"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 border-t border-(--color-border) pt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
            >
              <GithubIcon size={17} />
              Code
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
