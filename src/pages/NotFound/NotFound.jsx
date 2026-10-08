// TODO: Implement the not-found page.
import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[88vh] items-center justify-center px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-8xl font-bold tracking-tight text-(--color-accent) sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-(--color-text-primary) sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-(--color-text-secondary)">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--color-button) px-5 py-3 text-sm font-semibold text-(--color-button-text) transition hover:-translate-y-0.5 hover:bg-(--color-button-hover)"
          >
            <Home size={17} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-5 py-3 text-sm font-semibold text-(--color-text-primary) transition hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
