// NavBar.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders three <a> elements", () => {
  render(<NavBar />);
  expect(screen.getAllByRole("link")).toHaveLength(3);
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect(screen.getByText(/home/i).href).toContain("#home");
  expect(screen.getByText(/about/i).href).toContain("#about");
  expect(screen.getByText(/projects/i).href).toContain("#projects");
});
