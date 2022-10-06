export interface IssueListType {
  issues: IssueType[];
}

export interface IssueType {
  owner: string;
  repo: string;
}

export type issueLabelType = {
  id: number;
  name: string;
  color: string;
};

export type repoIssueType = {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  url: string;
  labels: issueLabelType[];
};
