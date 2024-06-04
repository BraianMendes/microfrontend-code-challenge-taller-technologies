import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./index";

describe("AddTodo Component", () => {
  let addTodoMock: jest.Mock;

  beforeEach(() => {
    addTodoMock = jest.fn();
  });

  test("renders input and button", () => {
    render(<AddTodo addTodo={addTodoMock} />);
    expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("calls addTodo with correct input value", () => {
    render(<AddTodo addTodo={addTodoMock} />);

    const inputElement = screen.getByPlaceholderText("Add a new todo");
    const buttonElement = screen.getByText("Add");

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(buttonElement);

    expect(addTodoMock).toHaveBeenCalledWith("New Task");
    expect(inputElement).toHaveValue("");
  });

  test("shows error message for empty input", () => {
    render(<AddTodo addTodo={addTodoMock} />);

    const buttonElement = screen.getByText("Add");
    fireEvent.click(buttonElement);

    expect(
      screen.getByText("Todo description cannot be empty.")
    ).toBeInTheDocument();
  });

  test("shows error message for long input", () => {
    render(<AddTodo addTodo={addTodoMock} />);

    const inputElement = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(inputElement, { target: { value: "a".repeat(101) } });
    const buttonElement = screen.getByText("Add");
    fireEvent.click(buttonElement);

    expect(
      screen.getByText("Todo description is too long.")
    ).toBeInTheDocument();
  });

  test("resets error message after successful submission", () => {
    render(<AddTodo addTodo={addTodoMock} />);

    const inputElement = screen.getByPlaceholderText("Add a new todo");
    const buttonElement = screen.getByText("Add");

    fireEvent.click(buttonElement);
    expect(
      screen.getByText("Todo description cannot be empty.")
    ).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Valid Task" } });
    fireEvent.click(buttonElement);

    expect(addTodoMock).toHaveBeenCalledWith("Valid Task");
    expect(
      screen.queryByText("Todo description cannot be empty.")
    ).not.toBeInTheDocument();
  });
});
