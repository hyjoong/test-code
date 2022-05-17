import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react/dist/pure";
import Input from "../components/atoms/Input/Input";

describe("Input", () => {
  const onChange = jest.fn();
  const onKeyUp = jest.fn();

  const renderInput = () => {
    return render(
      <Input onChange={onChange} onKeyUp={onKeyUp}>
        등록
      </Input>
    );
  };
  it("인풋창이 렌더링된다.", () => {
    const { getByPlaceholderText } = renderInput();
    expect(
      getByPlaceholderText("Github Repository를 검색하세요")
    ).toBeInTheDocument();
  });
});
