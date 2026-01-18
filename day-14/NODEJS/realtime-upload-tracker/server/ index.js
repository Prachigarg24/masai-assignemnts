const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const multer = require("multer");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const upload = multer({ dest: "uploads/" });

io.on("connection", socket => {
  console.log("Client connected:", socket.id);
});

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.json({ message: "Upload complete" });
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
