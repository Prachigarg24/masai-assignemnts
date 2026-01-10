export default function StepIndicator({ steps, current, valid, goTo }) {
  return (
    <div>
      {steps.map((s, i) => (
        <button
          key={i}
          disabled={!valid[i]}
          onClick={() => goTo(i)}
          style={{ fontWeight: current === i ? "bold" : "normal" }}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
