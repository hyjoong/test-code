import React from "react";
import Styled from "./SearchBar.styles";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";

interface Props {
  onClick: () => void;
  onChange: (e) => void;
  onKeyUp: (e) => void;
  placeholder: string;
}

const SearchBar = ({ onClick, onChange, onKeyUp, placeholder }: Props) => {
  return (
    <Styled.SearchBar>
      <Input onChange={onChange} onKeyUp={onKeyUp} placeholder={placeholder} />
      <Button size="SM" onClick={onClick} color="BLUE">
        검색
      </Button>
    </Styled.SearchBar>
  );
};

export default SearchBar;
