import { render, screen } from "@testing-library/react";
import App from "../../routes/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Yudith/i);
  expect(linkElement).toBeInTheDocument();
});
