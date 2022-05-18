import React from "react";
import Styled from "./Input.styles";

interface Props {
  onChange: (e) => void;
  onKeyUp: (e) => void;
  placeholder: string;
}

const Input = ({ onChange, onKeyUp, placeholder }: Props) => {
  return (
    <Styled.Input
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      required
    ></Styled.Input>
  );
};

export default Input;
