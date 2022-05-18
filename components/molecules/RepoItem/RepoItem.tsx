import Button from "@components/atoms/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Styled from "./RepoItem.styles";

interface Props {
  items: any;
  buttonName: string;
}

const RepoItem = ({ items, buttonName }: Props) => {
  const router = useRouter();

  const handlePage = (owner: string, repo: string) => {
    router.push(`/Issue/${owner}/${repo}`);
  };

  return (
    <>
      {items?.map((item, index) => (
        <Styled.RepoItem key={index}>
          <Styled.Title>
            <span>user : {item.full_name.split("/")[0]}</span>
            <span>repo : {item.full_name.split("/")[1]}</span>
          </Styled.Title>
          <Button
            size="SM"
            color="GREY"
            onClick={() =>
              handlePage(
                item.full_name.split("/")[0],
                item.full_name.split("/")[1]
              )
            }
          >
            {buttonName}
          </Button>
        </Styled.RepoItem>
      ))}
    </>
  );
};

export default RepoItem;
