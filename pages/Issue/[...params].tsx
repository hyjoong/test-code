import { GetServerSideProps } from "next";
import React from "react";
import { useRouter } from "next/router";
import { getIssuesApi } from "api/api";
import BaseLayout from "@components/template/BaseLayout/BaseLayout";
import IssueList from "@components/organisms/IssueList/IssueList";

const Issue = ({ issues, params }: any) => {
  const router = useRouter();
  console.log("router = ", router);
  console.log("params = ", params);
  console.log("issues", issues);
  return (
    <BaseLayout>
      <IssueList data={issues} />
    </BaseLayout>
  );
};

export default Issue;

export const getServerSideProps = async ({ params: { params } }) => {
  const response = await getIssuesApi(params[0], params[1]);
  return {
    props: { issues: response, params: params },
  };
};
