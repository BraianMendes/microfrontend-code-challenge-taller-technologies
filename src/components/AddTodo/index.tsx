import React, { useState } from "react";
import styles from "./AddTodo.module.css";

interface AddTodoProps {
  addTodo: (description: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setError("Todo description cannot be empty.");
      return;
    }
    if (description.length > 100) {
      setError("Todo description is too long.");
      return;
    }

    addTodo(description.trim());
    setDescription("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTodoForm}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new todo"
        className={styles.addTodoInput}
      />
      <button type="submit" className={styles.addTodoButton}>
        Add
      </button>
      {error && <p className={styles.errorText}>{error}</p>}
    </form>
  );
};

export default AddTodo;
