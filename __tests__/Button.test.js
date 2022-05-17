import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react/dist/pure";
import Button from "../components/atoms/Button/Button";

describe("Button", () => {
  const onClick = jest.fn();

  const renderButton = () => {
    return render(
      <Button size="MD" color="BLUE" onClick={onClick}>
        등록
      </Button>
    );
  };
  it("버튼이 렌더링된다.", () => {
    const { container } = renderButton();
    expect(container).toHaveTextContent("등록");
  });

  it("등록 버튼을 누르면 onClick함수가 호출된다", () => {
    const { getByRole } = renderButton();
    const button = getByRole("button", { name: "등록" });
    fireEvent.click(button);
    expect(onClick).toBeCalled;
  });
});
