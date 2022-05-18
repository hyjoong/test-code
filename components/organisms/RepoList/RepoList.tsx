import RepoItem from "@components/molecules/RepoItem/RepoItem";
import React from "react";
import { IssueType } from "types";

import Styled from "./RepoList.styles";
interface Props {
  items: IssueType[];
  buttonName: string;
}

const RepoList = ({ items, buttonName }: Props) => {
  return (
    <>
      <Styled.RepoList>
        {items.length ? (
          <RepoItem items={items} buttonName={buttonName} />
        ) : (
          <div>결과없음</div>
        )}
      </Styled.RepoList>
    </>
  );
};

export default RepoList;
