import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./index";

describe("TodoItem Component", () => {
  test("renders todo item with correct description", () => {
    const todo = { id: 1, description: "Test Todo", completed: false };
    render(<TodoItem todo={todo} toggleComplete={jest.fn()} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("renders completed todo item with line-through style", () => {
    const todo = { id: 1, description: "Test Todo", completed: true };
    render(<TodoItem todo={todo} toggleComplete={jest.fn()} />);
    expect(screen.getByText("Test Todo")).toHaveClass("completed");
  });

  test("calls toggleComplete when checkbox is clicked", () => {
    const todo = { id: 1, description: "Test Todo", completed: false };
    const toggleCompleteMock = jest.fn();
    render(<TodoItem todo={todo} toggleComplete={toggleCompleteMock} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(toggleCompleteMock).toHaveBeenCalledWith(todo.id);
  });
});
