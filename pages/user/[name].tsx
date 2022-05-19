import IssueList from "@components/organisms/IssueList/IssueList";
import BaseLayout from "@components/template/BaseLayout/BaseLayout";
import { getUserRepo } from "api/api";
import React from "react";

const User = ({ repos, params }: any) => {
  console.log("repos", repos);
  console.log("prarms", params);
  return (
    <BaseLayout>
      <IssueList data={repos} type="repo" />
    </BaseLayout>
  );
};

export default User;

export const getServerSideProps = async (context) => {
  const response = await getUserRepo(context.params.name);
  return {
    props: { repos: response, params: context.params },
  };
};
