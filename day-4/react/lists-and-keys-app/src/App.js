import React, { useState } from "react";

const initialTodos = [
  { id: "1", text: "Complete React project", priority: "High", completed: false },
  { id: "2", text: "Review PRs", priority: "Medium", completed: true },
  { id: "3", text: "Update documentation", priority: "Low", completed: false },
];

const priorityColors = {
  High: "red",
  Medium: "orange",
  Low: "green",
};

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Question 1: Todo List with Priorities</h2>
      <TodoList />

      <hr style={{ margin: "40px 0" }} />

      <h2>Question 2: Move Up / Move Down List</h2>
      <ReorderList />
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <span
            style={{
              marginLeft: "10px",
              padding: "2px 6px",
              borderRadius: "4px",
              backgroundColor: priorityColors[todo.priority],
              color: "white",
              fontSize: "12px",
            }}
          >
            {todo.priority}
          </span>

          <button
            onClick={() => toggleTodo(todo.id)}
            style={{ marginLeft: "10px" }}
          >
            Toggle
          </button>

          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: "5px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function ReorderList() {
  const [tasks, setTasks] = useState([
    "Task A",
    "Task B",
    "Task C",
    "Task D",
  ]);

  const moveItem = (index, direction) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      const targetIndex = index + direction;

      [newTasks[index], newTasks[targetIndex]] = [
        newTasks[targetIndex],
        newTasks[index],
      ];

      return newTasks;
    });
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={task} style={{ marginBottom: "10px" }}>
          {index + 1}. {task}

          <button
            onClick={() => moveItem(index, -1)}
            disabled={index === 0}
            style={{ marginLeft: "10px" }}
          >
            Move Up
          </button>

          <button
            onClick={() => moveItem(index, 1)}
            disabled={index === tasks.length - 1}
            style={{ marginLeft: "5px" }}
          >
            Move Down
          </button>
        </li>
      ))}
    </ul>
  );
}
