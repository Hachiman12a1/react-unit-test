import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("render Hello World as a text", () => {
  // arrange
  render(<Greeting />);

  //   Act
  // ...nothing

  //Assert
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});
