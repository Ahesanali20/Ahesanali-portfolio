// TODO: Implement the projects page.
import { useMemo, useState } from "react";
import { motion } from "motion/react";

import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import { projects } from "../../data/projects";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    return ["all", ...new Set(projects.map((project) => project.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !normalizedSearch ||
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.description.toLowerCase().includes(normalizedSearch) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(normalizedSearch),
        );

      const matchesCategory =
        category === "all" || project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="min-h-screen bg-(--color-background) px-6 pt-32 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
            My Work
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
            Projects &{" "}
            <span className="text-(--color-accent)">Experiments.</span>
          </h1>

          <p className="mt-6 text-base leading-8 text-(--color-text-secondary) sm:text-lg">
            Explore the projects I've built while learning and applying modern
            frontend development practices.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-12"
        >
          <ProjectFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            categories={categories}
          />
        </motion.div>

        {/* Result count */}
        <div className="mt-8 mb-6 flex items-center justify-between">
          <p className="text-sm text-(--color-text-secondary)">
            Showing{" "}
            <span className="font-semibold text-(--color-text-primary)">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Grid */}
        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
