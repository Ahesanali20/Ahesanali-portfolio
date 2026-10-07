// TODO: Implement project filters.
import { Search, X } from "lucide-react";

const ProjectFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}) => {
  return (
    <div className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-(--color-text-secondary)"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="h-12 w-full rounded-2xl border border-(--color-border) bg-(--color-background) pr-10 pl-11 text-sm text-(--color-text-primary) transition outline-none placeholder:text-(--color-text-secondary) focus:border-(--color-accent)"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-(--color-text-secondary) transition hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-12 rounded-2xl border border-(--color-border) bg-(--color-background) px-4 text-sm text-(--color-text-primary) transition outline-none focus:border-(--color-accent)"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All Categories" : item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectFilters;
