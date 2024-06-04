import React from "react";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: {
    id: number;
    description: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        className={`${styles.todoText} ${
          todo.completed ? styles.completed : ""
        }`}
      >
        {todo.description}
      </span>
    </div>
  );
};

export default TodoItem;
