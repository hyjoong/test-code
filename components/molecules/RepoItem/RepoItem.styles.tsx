import styled from "styled-components";

const RepoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 30px;
  padding: 10px;
  margin: 0 0 6px;
  border: 1px solid black;
  background-color: rgb(45, 45, 45);
  color: #fff;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export default { RepoItem, Title };
