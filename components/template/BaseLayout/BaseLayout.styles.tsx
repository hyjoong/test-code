import styled from "styled-components";

const Root = styled.div`
  padding-top: 4rem;
`;

const BaseLayoutMain = styled.main`
  max-width: 1024px;
  padding: 2rem 1rem;
  margin: 0 auto;
  overflow: auto;
  width: 100%;
  min-height: calc(100vh - 128px); 
  @media screen and (max-width: 420px) {
    padding: 1rem;
  }
`;

export default { Root, BaseLayoutMain };