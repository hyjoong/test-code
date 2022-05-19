import React from "react";
import { useRouter } from "next/router";
import BaseLayout from "@components/template/BaseLayout/BaseLayout";
import RepoList from "@components/organisms/RepoList/RepoList";
import { searchRepoApi } from "api/api";
import { useQuery } from "react-query";

const Search = () => {
  const router = useRouter();
  console.log("router", router);
  const { keyword } = router.query;

  const { data, isLoading } = useQuery(
    ["searchRepo", keyword],
    () => searchRepoApi(String(keyword)),
    {
      onError: (error: Error) => {
        alert(error.message);
      },
    }
  );

  return (
    <BaseLayout>
      <>
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          <RepoList items={data} buttonName="이슈" />
        )}
      </>
    </BaseLayout>
  );
};

export default Search;
