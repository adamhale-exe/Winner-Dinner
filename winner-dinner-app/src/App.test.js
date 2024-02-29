import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./customHooks/getTags", () => ({
  __esModule: true,
  default: () => ["Tag1", "Tag2", "Tag3"],
}));
jest.mock("./customHooks/getTotalRecipes", () => ({
  __esModule: true,
  default: () => 3,
}));

test("renders Winner Dinner header", () => {
  render(<App />);
  const headerElement = screen.getByText("Winner Dinner");
  expect(headerElement).toBeInTheDocument();
});

//I would like to mock the fetch requests that happen to speed up the test and also ensure I am only testing what is necessary
