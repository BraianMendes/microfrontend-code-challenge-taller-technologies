import React from "react";
import TodoItem from "../TodoItem/index.tsx";
import styles from "./TodoList.module.css";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
