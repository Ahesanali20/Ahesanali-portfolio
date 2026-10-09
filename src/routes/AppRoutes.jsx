import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import MainLayout from "../components/layout/MainLayout";
import PageTransition from "../components/animations/PageTransition";
import ScrollToTop from "../components/common/ScrollToTop";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Skills = lazy(() => import("../pages/Skills/Skills"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const ProjectDetails = lazy(
  () => import("../pages/ProjectDetails/ProjectDetails"),
);
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-[40vh] items-center justify-center text-(--color-text-secondary)"
          role="status"
          aria-live="polite"
        >
          Loading page...
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route element={<MainLayout locationKey={location.key} />}>
            <Route
              path="/"
              element={
                <PageTransition locationKey={location.key}>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition locationKey={location.key}>
                  <About />
                </PageTransition>
              }
            />

            <Route
              path="/projects"
              element={
                <PageTransition locationKey={location.key}>
                  <Projects />
                </PageTransition>
              }
            />

            <Route
              path="/skills"
              element={
                <PageTransition locationKey={location.key}>
                  <Skills />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition locationKey={location.key}>
                  <Contact />
                </PageTransition>
              }
            />

            <Route
              path="/projects/:projectId"
              element={
                <PageTransition locationKey={location.key}>
                  <ProjectDetails />
                </PageTransition>
              }
            />

            <Route
              path="*"
              element={
                <PageTransition locationKey={location.key}>
                  <NotFound />
                </PageTransition>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollToTop>
      <AnimatedRoutes />
    </ScrollToTop>
  </BrowserRouter>
);

export default AppRoutes;
