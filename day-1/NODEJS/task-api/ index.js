const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let idCounter = 1;

// CREATE Task
app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({ error: "Title and status are required" });
  }

  const task = {
    id: idCounter++,
    title,
    description || "",
    status
  };

  tasks.push(task);
  res.status(201).json(task);
});

// READ All Tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// READ Single Task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

// UPDATE Task (PUT)
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({ error: "Title and status are required" });
  }

  task.title = title;
  task.description = description || "";
  task.status = status;

  res.status(200).json(task);
});

// PARTIAL UPDATE (PATCH)
app.patch("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  Object.assign(task, req.body);
  res.status(200).json(task);
});

// DELETE Task
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
