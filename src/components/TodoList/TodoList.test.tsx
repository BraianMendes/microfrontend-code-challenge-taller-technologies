import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./index";

describe("TodoList Component", () => {
  test("renders list of todos", () => {
    const todos = [
      { id: 1, description: "Test Todo 1", completed: false },
      { id: 2, description: "Test Todo 2", completed: true },
    ];
    render(<TodoList todos={todos} toggleComplete={jest.fn()} />);
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
  });
});
