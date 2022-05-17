import React from "react"; 
import Header from "components/organisms/Header/Header"; 
import Styled from "./BaseLayout.styles";

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const BaseLayout = ({ header = <Header />, children }: Props) => {
  return (
    <Styled.Root>
      {header}
      <Styled.BaseLayoutMain>{children}</Styled.BaseLayoutMain>
    </Styled.Root>
  );
};

export default BaseLayout;
