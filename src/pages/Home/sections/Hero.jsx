// TODO: Implement the hero section.
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pt-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[32px_32px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-gray-300 backdrop-blur-md"
            >
              <Sparkles size={15} className="text-blue-400" />

              <span>Available for opportunities</span>

              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Ahesanali{" "}
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Kadiwala
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xl font-medium text-gray-300 sm:text-2xl"
            >
              React Developer
              <span className="mx-3 text-gray-600">/</span>
              Frontend Developer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              I build modern, responsive and interactive web experiences using
              React and the modern frontend ecosystem. I focus on clean code,
              thoughtful UI and scalable architecture.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
              >
                View My Projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/3 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07]"
              >
                <Mail size={17} />
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex items-center gap-3"
            >
              <a
                href="https://github.com/Ahesanali20"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahesanalikadiwala"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <LinkedinIcon size={19} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="relative mx-auto flex h-105 w-full max-w-lg items-center justify-center lg:h-145"
          >
            {/* Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-[100px] sm:h-80 sm:w-80" />

            {/* Main glass card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-80 w-70 items-center justify-center rounded-4xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:h-100 sm:w-87.5"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-6 rounded-3xl bg-linear-to-br from-blue-500/20 via-transparent to-violet-500/20" />

              <div className="relative text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-blue-500/20 to-violet-500/20 text-4xl font-bold text-white shadow-2xl shadow-blue-500/20">
                  AK
                </div>

                <p className="mt-6 text-lg font-semibold text-white">
                  React Developer
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Building digital experiences
                </p>
              </div>

              {/* Floating React badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 -left-8 rounded-2xl border border-white/10 bg-[#0d1117]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-white">React</p>
                <p className="text-xs text-gray-500">Frontend</p>
              </motion.div>

              {/* Floating Motion badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-32 -right-8 rounded-2xl border border-white/10 bg-[#0d1117]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-white">Motion</p>
                <p className="text-xs text-gray-500">Animation</p>
              </motion.div>

              {/* Floating Tailwind badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0d1117]/90 px-5 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-white">Tailwind CSS</p>
                <p className="text-xs text-gray-500">UI & Styling</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 sm:flex"
      >
        <span className="text-xs tracking-[0.25em] uppercase">Scroll</span>

        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
