interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

let memoryStorage: Todo[] = [];

const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = "__test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

const isSessionStorageAvailable = (): boolean => {
  try {
    const testKey = "__test__";
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const loadTodosFromMemory = (): Todo[] | null => {
  return memoryStorage;
};

const saveTodosToMemory = (todos: Todo[]): void => {
  memoryStorage = todos;
};

const loadTodosFromSession = (): Todo[] | null => {
  const todos = sessionStorage.getItem("todos");
  return todos ? JSON.parse(todos) : null;
};

const saveTodosToSession = (todos: Todo[]): void => {
  sessionStorage.setItem("todos", JSON.stringify(todos));
};

export const loadTodos = (): Todo[] | null => {
  if (isLocalStorageAvailable()) {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : null;
  } else if (isSessionStorageAvailable()) {
    return loadTodosFromSession();
  } else {
    const todos = getCookie("todos");
    if (todos) {
      return JSON.parse(todos);
    } else {
      return loadTodosFromMemory();
    }
  }
};

export const saveTodos = (todos: Todo[]): void => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("todos", JSON.stringify(todos));
  } else if (isSessionStorageAvailable()) {
    saveTodosToSession(todos);
  } else {
    setCookie("todos", JSON.stringify(todos), 7);
    saveTodosToMemory(todos);
  }
};
