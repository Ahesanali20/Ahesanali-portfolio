import Hero from "./sections/Hero";
import AboutPreview from "./sections/AboutPreview";
import SkillsPreview from "./sections/SkillsPreview";
import FeaturedProjects from "./sections/FeaturedProjects";
import GithubRepos from "./sections/GithubRepos";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <GithubRepos />
    </>
  );
};

export default Home;
