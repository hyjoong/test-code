import { render } from "@testing-library/react";
// import { fireEvent, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router, Route, Switch } from "react-router-dom";
import SearchBar from "../components/molecules/SearchBar/SearchBar";
// const { getByPlaceholderText, getByRole } = screen;

const onClick = jest.fn();
const onChange = jest.fn();

// beforeEach(() => {
//   jest.clearAllMocks();
// });

describe("SearchBar", () => {
  it("SearchBar가 렌더링 된다", async () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      //<Router history={history}>
      <SearchBar onClick={onClick} onChange={onChange} />
      //</Router>
    );
    const searchInput = getByRole("textbox");
    const searchButton = getByRole("button", { name: "검색" });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  // it("검색하고자 하는 레포지토리를 검색해서 search페이지로 이동할 수 있다", async () => {
  //   const searchInput = getByPlaceholderText("Github Repository를 검색하세요");

  //   const searchButton = getByRole("button", { name: "검색" });

  //   fireEvent.change(searchInput, {
  //     target: { value: "henry" },
  //   });
  //   fireEvent.click(searchButton);
  //   expect(onClick).toBeCalled();
  //   await waitFor(() => expect(history.location.pathname).toBe("/Search"));
  // });
});
