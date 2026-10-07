// TODO: Implement the project details page.
import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react/dist/cjs/lucide-react";
import { GithubIcon } from "@/components/ui/github";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-(--color-background) px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-(--color-text-primary)">
            Project Not Found
          </h1>

          <p className="mt-4 text-(--color-text-secondary)">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-(--color-accent) px-5 py-3 text-sm font-semibold text-white transition hover:bg-(--color-accent-hover)"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-(--color-background) px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
            {project.category}
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-(--color-text-secondary) sm:text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-surface) shadow-(--color-accent-shadow) shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-(--color-text-primary)">
              About this project
            </h2>

            <p className="mt-4 leading-8 text-(--color-text-secondary)">
              {project.description}
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-fit rounded-3xl border border-(--color-border) bg-(--color-surface) p-6"
          >
            <h3 className="font-semibold text-(--color-text-primary)">
              Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-(--color-border) bg-(--color-background) px-3 py-1.5 text-xs font-medium text-(--color-text-secondary)"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--color-border) px-4 py-3 text-sm font-semibold text-(--color-text-primary) transition hover:border-(--color-accent) hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
              >
                <GithubIcon size={17} />
                View Source
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--color-accent) px-4 py-3 text-sm font-semibold text-white transition hover:bg-(--color-accent-hover)"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
