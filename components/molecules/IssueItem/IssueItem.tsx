import Link from "next/link";
import React from "react";
import styled from "styled-components";

const IssueItem = ({ data }: any) => {
  return (
    <Root>
      {data?.map((item, index) => (
        <Link href={`${item.html_url}`} key={index}>
          <Item state={item.state}>{item.title}</Item>
        </Link>
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4px;
`;

const Item = styled.div<{ state: string }>`
  height: 200px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: ${({ state }) =>
    state === "open" ? "#238636" : "#8957E5"};
  color: white;
  cursor: pointer;
`;

export default IssueItem;
