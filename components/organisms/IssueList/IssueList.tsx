import IssueItem from "@components/molecules/IssueItem/IssueItem";
import React from "react";

const IssueList = ({ data }: any) => {
  return <>{data.length ? <IssueItem data={data} /> : <div>결과없음</div>}</>;
};

export default IssueList;
