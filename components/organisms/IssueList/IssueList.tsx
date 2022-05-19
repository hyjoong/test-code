import IssueItem from "@components/molecules/IssueItem/IssueItem";
import React from "react";

const IssueList = ({ data, type }: any) => {
  return (
    <>
      {data.length ? (
        <IssueItem data={data} type={type} />
      ) : (
        <div>결과없음</div>
      )}
    </>
  );
};

export default IssueList;
