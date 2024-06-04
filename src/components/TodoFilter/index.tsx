import React from "react";
import styles from "./TodoFilter.module.css";

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.todoFilter}>
      <button
        onClick={() => setFilter("all")}
        className={`${styles.filterButton} ${
          filter === "all" ? styles.active : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`${styles.filterButton} ${
          filter === "active" ? styles.active : ""
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`${styles.filterButton} ${
          filter === "completed" ? styles.active : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
