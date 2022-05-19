import IssueList from "@components/organisms/IssueList/IssueList";
import BaseLayout from "@components/template/BaseLayout/BaseLayout";
import { getUserRepo } from "api/api";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const userPage = () => {
  const router = useRouter();
  console.log("router", router);
  const { keyword } = router.query;

  const { data, isLoading } = useQuery(
    ["userRepo", keyword],
    () => getUserRepo(String(keyword)),
    {
      onError: (error: Error) => {
        alert(error.message);
      },
    }
  );

  return (
    <BaseLayout>
      <>
        {isLoading ? <div>로딩중</div> : <IssueList data={data} type="repo" />}
      </>
    </BaseLayout>
  );
};

export default userPage;
