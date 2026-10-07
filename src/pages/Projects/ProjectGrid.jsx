// TODO: Implement the project grid.
import { motion } from "motion/react";

import ProjectCard from "../../components/common/ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-(--color-border) bg-(--color-surface) px-6 py-20 text-center">
        <h3 className="text-xl font-semibold text-(--color-text-primary)">
          No projects found
        </h3>

        <p className="mt-2 text-sm text-(--color-text-secondary)">
          Try changing your search or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.06,
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
