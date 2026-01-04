const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

class FileWatcher extends EventEmitter {
  constructor(directory) {
    super();
    this.directory = directory;
    this.files = new Set(fs.readdirSync(directory));
  }

  startWatching() {
    try {
      fs.watch(this.directory, (eventType, filename) => {
        if (!filename) return;

        const filePath = path.join(this.directory, filename);
        const exists = fs.existsSync(filePath);

        if (exists && !this.files.has(filename)) {
          this.files.add(filename);
          this.emit("fileAdded", filename);
        } 
        else if (exists && this.files.has(filename)) {
          this.emit("fileModified", filename);
        } 
        else if (!exists && this.files.has(filename)) {
          this.files.delete(filename);
          this.emit("fileDeleted", filename);
        }
      });

      this.emit("watchingStarted");
    } catch (error) {
      this.emit("error", error);
    }
  }
}

// ---------- Usage ----------

const watcher = new FileWatcher("./watch-folder");

watcher.on("watchingStarted", () => {
  console.log("File watcher started...");
});

watcher.on("fileAdded", (file) => {
  console.log(`[${new Date().toLocaleString()}] File Added: ${file}`);
});

watcher.on("fileModified", (file) => {
  console.log(`[${new Date().toLocaleString()}] File Modified: ${file}`);
});

watcher.on("fileDeleted", (file) => {
  console.log(`[${new Date().toLocaleString()}] File Deleted: ${file}`);
});

watcher.on("error", (err) => {
  console.error("Error:", err.message);
});

watcher.startWatching();
