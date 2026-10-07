import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchGithubRepositories = async (username) => {
  const response = await githubApi.get(`/users/${username}/repos`, {
    params: {
      sort: "updated",
      per_page: 6,
    },
  });

  return response.data;
};
