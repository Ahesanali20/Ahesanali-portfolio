import { useQuery } from "@tanstack/react-query";

import { fetchGithubRepositories } from "../services/githubApi";
import { siteConfig } from "../config/siteConfig";

const useGithubRepositories = () => {
  return useQuery({
    queryKey: ["github", "repositories"],
    queryFn: () => fetchGithubRepositories(siteConfig.githubUsername),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGithubRepositories;
