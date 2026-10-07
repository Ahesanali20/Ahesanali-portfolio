import { motion } from "motion/react";
import { siteConfig } from "../../../config/siteConfig";
import useGithubRepositories from "../../../hooks/useGithubRepositories";
import { ArrowUpRight, Star } from "lucide-react/dist/cjs/lucide-react";
import { GithubIcon } from "@/components/ui/github";

const GithubRepos = () => {
  const {
    data: repositories = [],
    isLoading,
    isError,
  } = useGithubRepositories();

  return (
    <section className="border-t border-(--color-border) bg-(--color-surface) px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-(--color-accent) uppercase">
              GitHub
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-(--color-text-primary) sm:text-4xl">
              Open source &{" "}
              <span className="text-(--color-accent)">experiments.</span>
            </h2>
          </div>

          <a
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent)"
          >
            View GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-52 animate-pulse rounded-3xl bg-(--color-accent-soft)"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="mt-12 rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center">
            <p className="text-sm text-red-500">
              Unable to load GitHub repositories.
            </p>
          </div>
        )}

        {/* Repositories */}
        {!isLoading && !isError && (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-(--color-border) bg-(--color-background) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-(--color-accent-shadow) hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon size={21} className="text-(--color-accent)" />

                  <ArrowUpRight
                    size={18}
                    className="text-(--color-text-secondary) transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-(--color-accent)"
                  />
                </div>

                <h3 className="mt-6 font-semibold text-(--color-text-primary)">
                  {repo.name}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-(--color-text-secondary)">
                  {repo.description || "No description available."}
                </p>

                <div className="mt-6 flex items-center gap-4 text-xs text-(--color-text-secondary)">
                  {repo.language && <span>{repo.language}</span>}

                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubRepos;
