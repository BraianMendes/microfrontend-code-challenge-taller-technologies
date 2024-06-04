import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoFilter from "./index";

describe("TodoFilter Component", () => {
  let setFilterMock: jest.Mock;

  beforeEach(() => {
    setFilterMock = jest.fn();
  });

  test("renders filter buttons", () => {
    render(<TodoFilter filter="all" setFilter={setFilterMock} />);
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  test('calls setFilter with "all" when All button is clicked', () => {
    render(<TodoFilter filter="all" setFilter={setFilterMock} />);
    const allButton = screen.getByText("All");
    fireEvent.click(allButton);
    expect(setFilterMock).toHaveBeenCalledWith("all");
  });

  test('calls setFilter with "active" when Active button is clicked', () => {
    render(<TodoFilter filter="all" setFilter={setFilterMock} />);
    const activeButton = screen.getByText("Active");
    fireEvent.click(activeButton);
    expect(setFilterMock).toHaveBeenCalledWith("active");
  });

  test('calls setFilter with "completed" when Completed button is clicked', () => {
    render(<TodoFilter filter="all" setFilter={setFilterMock} />);
    const completedButton = screen.getByText("Completed");
    fireEvent.click(completedButton);
    expect(setFilterMock).toHaveBeenCalledWith("completed");
  });

  test("applies active class to the button corresponding to the current filter", () => {
    const { rerender } = render(
      <TodoFilter filter="all" setFilter={setFilterMock} />
    );

    expect(screen.getByText("All")).toHaveClass("active");
    expect(screen.getByText("Active")).not.toHaveClass("active");
    expect(screen.getByText("Completed")).not.toHaveClass("active");

    rerender(<TodoFilter filter="active" setFilter={setFilterMock} />);
    expect(screen.getByText("All")).not.toHaveClass("active");
    expect(screen.getByText("Active")).toHaveClass("active");
    expect(screen.getByText("Completed")).not.toHaveClass("active");

    rerender(<TodoFilter filter="completed" setFilter={setFilterMock} />);
    expect(screen.getByText("All")).not.toHaveClass("active");
    expect(screen.getByText("Active")).not.toHaveClass("active");
    expect(screen.getByText("Completed")).toHaveClass("active");
  });
});
