import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

import ProjectCard from "../../../components/common/ProjectCard";
import SlideUp from "../../../components/animations/SlideUp";
import { projects } from "../../../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SlideUp className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-(--color-accent)">
              <BriefcaseBusiness size={18} />

              <p className="text-sm font-semibold tracking-[0.2em] uppercase">
                Selected Work
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
              Projects I've built.
            </h2>

            <p className="mt-4 leading-7 text-(--color-text-secondary)">
              A selection of projects where I've applied React, modern frontend
              technologies, state management and API integration to solve
              practical problems.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent) transition hover:gap-3"
          >
            View all projects
            <ArrowRight size={17} />
          </Link>
        </SlideUp>

        {/* Projects */}
        {featuredProjects.length > 0 ? (
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <SlideUp key={project.id} delay={index * 0.1} className="h-full">
                <ProjectCard project={project} />
              </SlideUp>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-(--color-border) bg-(--color-surface) p-10 text-center">
            <p className="text-sm text-(--color-text-secondary)">
              No featured projects available.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <SlideUp className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="font-semibold text-(--color-text-primary)">
              Want to explore more?
            </h3>

            <p className="mt-1 text-sm text-(--color-text-secondary)">
              Check out all my projects and the technologies behind them.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-(--color-button) px-5 py-3 text-sm font-semibold text-(--color-button-text) transition hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
          >
            Explore Projects
            <ArrowRight size={17} />
          </Link>
        </SlideUp>
      </div>
    </section>
  );
};

export default FeaturedProjects;
