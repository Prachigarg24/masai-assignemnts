const express = require("express");
const fs = require("fs");
const readline = require("readline");
const app = express();

let progress = 0;

app.get("/process-file", (req, res) => {
  const inputFile = "input.csv";
  const outputFile = "output.csv";

  const fileSize = fs.statSync(inputFile).size;
  let processedBytes = 0;

  const readStream = fs.createReadStream(inputFile);
  const writeStream = fs.createWriteStream(outputFile);

  const rl = readline.createInterface({
    input: readStream
  });

  readStream.on("data", (chunk) => {
    processedBytes += chunk.length;
    progress = Math.round((processedBytes / fileSize) * 100);
  });

  rl.on("line", (line) => {
    writeStream.write(line.toUpperCase() + "\n");
  });

  rl.on("close", () => {
    writeStream.end();
    progress = 100;
  });

  readStream.on("error", handleError);
  writeStream.on("error", handleError);

  function handleError(err) {
    res.status(500).json({ error: err.message });
  }

  res.json({ message: "File processing started" });
});

app.get("/progress", (req, res) => {
  res.json({ progress });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
