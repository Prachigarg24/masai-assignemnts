const express = require("express");
const rateLimiter = require("./rateLimiter");

const app = express();
app.use(express.json());

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/test", (req, res) => {
  res.json({ message: "Request successful" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
