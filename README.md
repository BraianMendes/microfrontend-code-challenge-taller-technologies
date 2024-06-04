# Microfrontend Code Challenge - Taller Technologies

This project is a microfrontend application built with React and TypeScript. The application is a fully functional todo list, designed to demonstrate best practices in code organization, state management, and testing.

## Table of Contents

- [Microfrontend Code Challenge - Taller Technologies](#microfrontend-code-challenge---taller-technologies)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Todo Creation**: Add new todo items.
- **Todo Status**: Mark tasks as completed or incomplete.
- **Todo Persistence**: Persist todos across sessions using localStorage, sessionStorage, memory, and cookies.
- **Filtering**: Filter todos by all, active, and completed statuses.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BraianMendes/microfrontend-code-challenge-taller-technologies
   cd microfrontend-code-challenge-taller-technologies
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

To run the application in development mode:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Running Tests

To run the tests and check the coverage:

```bash
npm test
```

For a detailed coverage report:

```bash
npm run test:coverage
```

## Project Structure

The project structure is organized as follows:

```
microfrontend-code-challenge-taller-technologies/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddTodo/
│   │   │   ├── index.tsx
│   │   │   ├── AddTodo.module.css
│   │   │   └── AddTodo.test.tsx
│   │   ├── TodoFilter/
│   │   │   ├── index.tsx
│   │   │   ├── TodoFilter.module.css
│   │   │   └── TodoFilter.test.tsx
│   │   ├── TodoItem/
│   │   │   ├── index.tsx
│   │   │   ├── TodoItem.module.css
│   │   │   └── TodoItem.test.tsx
│   │   ├── TodoList/
│   │   │   ├── index.tsx
│   │   │   ├── TodoList.module.css
│   │   │   └── TodoList.test.tsx
│   ├── utils/
│   │   ├── storageUtil.ts
│   │   └── storageUtil.test.ts
│   ├── App.module.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.ts
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance.
