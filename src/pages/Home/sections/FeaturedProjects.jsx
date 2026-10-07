// TODO: Implement the featured projects section.
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ProjectCard from "../../../components/common/ProjectCard";
import { projects } from "../../../data/projects";
import { ArrowUpRight } from "lucide-react/dist/cjs/lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden border-t border-(--color-border) bg-(--color-background) px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-(--color-accent-glow) opacity-10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              Selected Work
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
              Projects I've{" "}
              <span className="text-(--color-accent)">built.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-(--color-text-secondary) sm:text-lg">
              A selection of projects that demonstrate my approach to frontend
              development, UI design and application architecture.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent)"
          >
            View all projects
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
