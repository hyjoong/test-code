import React from "react";
import BaseLayout from "@components/template/BaseLayout/BaseLayout";
import IssueList from "@components/organisms/IssueList/IssueList";
import { requestIssues } from "api/request/issue";
import { repoIssueType } from "types";

type issuesType = {
  issues: repoIssueType[];
};

const Issue = ({ issues }: issuesType) => {
  return (
    <BaseLayout>
      <IssueList data={issues} />
    </BaseLayout>
  );
};

export default Issue;

export const getServerSideProps = async ({ query }) => {
  const response = await requestIssues(query.owner, query.repo);

  return {
    props: { issues: response },
  };
};
