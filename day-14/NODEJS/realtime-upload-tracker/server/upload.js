function emitProgress(io, socketId, uploaded, total) {
  const percent = Math.round((uploaded / total) * 100);
  io.to(socketId).emit("upload-progress", { percent });
}

module.exports = emitProgress;
