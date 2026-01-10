import { useState } from "react";
import StepIndicator from "./StepIndicator";

const steps = ["Shipping", "Billing", "Payment", "Review"];

export default function Wizard() {
  const [current, setCurrent] = useState(0);
  const [valid, setValid] = useState([false, false, false, false]);

  function markValid() {
    const copy = [...valid];
    copy[current] = true;
    setValid(copy);
  }

  function next() {
    if (!valid[current]) return;
    if (current < steps.length - 1) setCurrent(current + 1);
  }

  function goTo(i) {
    if (valid[i]) setCurrent(i);
  }

  return (
    <div>
      <h3>Checkout Wizard</h3>

      <StepIndicator steps={steps} current={current} valid={valid} goTo={goTo} />

      <p>Current Step: {steps[current]}</p>

      <button onClick={markValid}>Mark Step Valid</button>
      <button onClick={next} disabled={!valid[current]}>Next</button>
    </div>
  );
}
