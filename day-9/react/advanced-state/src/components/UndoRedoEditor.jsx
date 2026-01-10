import { useState } from "react";

export default function UndoRedoEditor() {
  const [history, setHistory] = useState([""]);
  const [index, setIndex] = useState(0);

  const currentText = history[index];

  function handleChange(e) {
    const newText = e.target.value;
    const newHistory = history.slice(0, index + 1);
    setHistory([...newHistory, newText]);
    setIndex(newHistory.length);
  }

  function undo() {
    if (index > 0) setIndex(index - 1);
  }

  function redo() {
    if (index < history.length - 1) setIndex(index + 1);
  }

  return (
    <div>
      <h3>Undo / Redo Editor</h3>

      <textarea value={currentText} onChange={handleChange} />

      <div>
        <button onClick={undo} disabled={index === 0}>Undo</button>
        <button onClick={redo} disabled={index === history.length - 1}>Redo</button>
      </div>

      <p>History: {index + 1}/{history.length}</p>
    </div>
  );
}
