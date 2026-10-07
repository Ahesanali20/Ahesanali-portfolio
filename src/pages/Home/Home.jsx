import Hero from "./sections/Hero";
import AboutPreview from "./sections/AboutPreview";
import SkillsPreview from "./sections/SkillsPreview";
import FeaturedProjects from "./sections/FeaturedProjects";
import GithubRepos from "./sections/GithubRepos";
import ContactCTA from "./sections/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <GithubRepos />
      <ContactCTA />
    </>
  );
};

export default Home;
