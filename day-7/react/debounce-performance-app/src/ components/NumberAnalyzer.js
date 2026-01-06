import { useMemo, useState } from "react";

function expensiveCalculation(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return {
    isPrime: factors.length === 2,
    factors,
    sum: factors.reduce((a, b) => a + b, 0)
  };
}

export default function NumberAnalyzer() {
  const [number, setNumber] = useState(10);
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    setCount(c => c + 1);
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "20px"
      }}
    >
      <h2>Number Analyzer</h2>

      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark(d => !d)}>
        Toggle Theme
      </button>

      <p>Is Prime: {result.isPrime ? "Yes" : "No"}</p>
      <p>Factors: {result.factors.join(", ")}</p>
      <p>Sum of Factors: {result.sum}</p>
      <p>Calculation Count: {count}</p>
    </div>
  );
}
