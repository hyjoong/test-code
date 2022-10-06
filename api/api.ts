import api from "./axios";


export const searchRepoApi = async (repo: string) => {
  const response: any = await api(
    `/search/repositories?q=${repo}&per_page=100&page=1`
  );
  if (response.status !== 200) {
    throw response.status;
  }

  return response.data.items;
};

export const getUserRepo = async (owner: string) => {
  const response = await api(`/users/${owner}/repos?sort=updated&per_page=100`);
  if (response.status !== 200) {
    throw response.status;
  }
  return response.data;
};
