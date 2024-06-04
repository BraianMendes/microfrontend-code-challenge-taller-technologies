import { loadTodos, saveTodos } from "./storageUtils";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const mockTodos: Todo[] = [
  { id: 1, description: "Test Todo 1", completed: false },
  { id: 2, description: "Test Todo 2", completed: true },
];

describe("storageUtil", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie = "";
    jest.clearAllMocks();
  });

  test("should save and load todos from localStorage", () => {
    saveTodos(mockTodos);
    const loadedTodos = loadTodos();
    expect(loadedTodos).toEqual(mockTodos);
  });

  test("should fallback to memory storage when both localStorage and sessionStorage are not available", () => {
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage is not available");
    });

    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Storage is not available");
    });

    saveTodos(mockTodos);
    const loadedTodos = loadTodos();
    expect(loadedTodos).toEqual(mockTodos);
  });

  test("should fallback to cookies when both localStorage and sessionStorage are not available", () => {
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage is not available");
    });

    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Storage is not available");
    });

    saveTodos(mockTodos);

    const loadedTodos = loadTodos();
    expect(loadedTodos).toEqual(mockTodos);
  });

  test("should return null if no todos are found in any storage", () => {
    const loadedTodos = loadTodos();
    expect(loadedTodos).toBeNull();
  });
});
