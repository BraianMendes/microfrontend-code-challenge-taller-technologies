import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo/index.tsx";
import TodoList from "./components/TodoList/index.tsx";
import TodoFilter from "./components/TodoFilter/index.tsx";
import { loadTodos, saveTodos } from "./utils/storageUtils.ts";
import styles from "./App.module.css";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = loadTodos();
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (description: string) => {
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appTitle}>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
