import { motion } from "motion/react";
import { ArrowUpRight, GitFork, Star, Code2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { GithubIcon } from "@/components/ui/github";
import useGithubRepositories from "../../../hooks/useGithubRepositories";
import { siteConfig } from "../../../config/siteConfig";

const GithubRepos = () => {
  const { data, isLoading, isError } = useGithubRepositories();

  const repositories = data?.slice(0, 6) ?? [];

  return (
    <section className="border-y border-(--color-border) bg-(--color-surface) px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-(--color-accent)">
              <GithubIcon size={19} />

              <p className="text-sm font-semibold tracking-[0.2em] uppercase">
                GitHub
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
              What I'm building.
            </h2>

            <p className="mt-4 leading-7 text-(--color-text-secondary)">
              A live look at my latest public repositories and experiments from
              GitHub.
            </p>
          </div>

          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent) transition hover:gap-3"
          >
            View GitHub Profile
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* Loading */}
        {isLoading && (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <GithubSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="mt-12 rounded-2xl border border-(--color-border) bg-(--color-background) p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
              <AlertCircle size={22} />
            </div>

            <h3 className="mt-4 font-semibold text-(--color-text-primary)">
              Unable to load repositories
            </h3>

            <p className="mt-2 text-sm text-(--color-text-secondary)">
              Please visit my GitHub profile to explore my latest work.
            </p>

            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-(--color-button) px-5 py-3 text-sm font-semibold text-(--color-button-text) transition hover:bg-(--color-button-hover)"
            >
              Visit GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && repositories.length === 0 && (
          <div className="mt-12 rounded-2xl border border-(--color-border) bg-(--color-background) p-8 text-center">
            <p className="text-sm text-(--color-text-secondary)">
              No public repositories found.
            </p>
          </div>
        )}

        {/* Repositories */}
        {!isLoading && !isError && repositories.length > 0 && (
          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-background) p-6 transition duration-300 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
              >
                {/* Repo Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent)">
                    <Code2 size={20} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-(--color-text-secondary) transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--color-accent)"
                  />
                </div>

                {/* Repo Name */}
                <h3 className="mt-5 line-clamp-1 text-lg font-semibold text-(--color-text-primary) group-hover:text-(--color-accent)">
                  {repo.name}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-(--color-text-secondary)">
                  {repo.description || "No description available."}
                </p>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-(--color-border) pt-5 text-xs text-(--color-text-secondary)">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-(--color-accent)" />
                      {repo.language}
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1.5">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <GitFork size={14} />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) transition hover:text-(--color-accent)"
          >
            Interested in working together?
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const GithubSkeleton = () => {
  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-background) p-6">
      <div className="flex items-start justify-between">
        <div className="h-11 w-11 animate-pulse rounded-xl bg-(--color-border)" />

        <div className="h-5 w-5 animate-pulse rounded bg-(--color-border)" />
      </div>

      <div className="mt-5 h-5 w-2/3 animate-pulse rounded bg-(--color-border)" />

      <div className="mt-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-(--color-border)" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-(--color-border)" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-(--color-border)" />
      </div>

      <div className="mt-6 flex gap-4 border-t border-(--color-border) pt-5">
        <div className="h-3 w-16 animate-pulse rounded bg-(--color-border)" />
        <div className="h-3 w-10 animate-pulse rounded bg-(--color-border)" />
        <div className="h-3 w-10 animate-pulse rounded bg-(--color-border)" />
      </div>
    </div>
  );
};

export default GithubRepos;
