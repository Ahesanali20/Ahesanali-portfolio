import { motion } from "motion/react";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
} from "lucide-react/dist/cjs/lucide-react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../data/projects";
import { GithubIcon } from "@/components/ui/github";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
            404
          </p>

          <h1 className="mt-3 text-3xl font-bold text-(--color-text-primary)">
            Project Not Found
          </h1>

          <p className="mt-4 text-(--color-text-secondary)">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-5 py-3 text-sm font-semibold text-(--color-button-text) transition hover:bg-(--color-button-hover)"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <span className="inline-flex rounded-full bg-(--color-accent-soft) px-3 py-1.5 text-xs font-semibold text-(--color-accent)">
              {project.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              {project.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-5 py-3 text-sm font-semibold text-(--color-button-text) transition hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
                >
                  <GithubIcon size={17} />
                  View on GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-5 py-3 text-sm font-semibold text-(--color-text-primary) transition hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-background) shadow-xl"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center text-(--color-text-secondary)">
                No preview available
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Information */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Project Features
            </p>

            <h2 className="mt-3 text-3xl font-bold text-(--color-text-primary)">
              What I built.
            </h2>

            <div className="mt-8 space-y-4">
              {project.features?.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-(--color-border) bg-(--color-surface) p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-(--color-accent)"
                  />

                  <span className="text-sm leading-6 text-(--color-text-secondary)">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Technologies
            </p>

            <h2 className="mt-3 text-3xl font-bold text-(--color-text-primary)">
              Tech stack.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-sm font-medium text-(--color-text-secondary) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
