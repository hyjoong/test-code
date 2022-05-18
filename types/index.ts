export interface IssueListType {
  issues: IssueType[];
}

export interface IssueType {
  owner: string;
  repo: string;
}
