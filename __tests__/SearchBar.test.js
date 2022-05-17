import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/react/dist/pure";
import SearchBar from "../components/molecules/SearchBar/SearchBar";

describe("SearchBar", () => {
  beforeEach(async () => {
    await render(<SearchBar />);
  });

  it("검색바가 렌더링된다.", () => {
    screen.getByRole("button");
    screen.getByPlaceholderText("Github Repository를 검색하세요");
  });
});
