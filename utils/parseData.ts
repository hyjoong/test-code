const parseRepoData = (repo: any) => {
  const item = repo.full_name.split("/");
  return { owner: item[0], repo: item[1] };
};

export const parseRepoDataList = (data: []) => {
  return data.map(parseRepoData);
};
