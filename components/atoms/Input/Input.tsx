import React from "react";
import Styled from "./Input.styles";

interface Props {
  onChange: (e) => void;
  onKeyUp: (e) => void;
}

const Input = ({ onChange, onKeyUp }: Props) => {
  return (
    <Styled.Input
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder="Github Repository를 검색하세요 "
    ></Styled.Input>
  );
};

export default Input;
