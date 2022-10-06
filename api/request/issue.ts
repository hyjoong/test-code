import api from "api/axios";
import { repoIssueType } from "./../../types/index";

const requestIssues = async (owner: string, repo: string) => {
  return api
    .get<repoIssueType[]>(
      `/repos/${owner}/${repo}/issues?state=all&&per_page=100`
    )
    .then((response) => response.data);
};

export { requestIssues };
