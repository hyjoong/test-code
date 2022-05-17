import axios from "axios";

const BASE_URL = `https://api.github.com`;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getIssuesApi = async (owner: string, repo: string) => {
  const response = await api(
    `/${owner}/${repo}/issues?state=all&&per_page=100`
  );
  if (response.status !== 200) {
    throw response.status;
  }
  return response.data;
};

export const searchRepoApi = async (repo: string) => {
  const response = await api(
    `/search/repositories?q=${repo}&per_page=20&page=1`
  );
  if (response.status !== 200) {
    throw response.status;
  }

  return response.data.items;
};
