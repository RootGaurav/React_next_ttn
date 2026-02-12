import { useState } from "react";

function Counters() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter With Increment and Decrement Buttons</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+(Increment)</button>
      <button onClick={() => setCount(count - 1)}>-(Decrement)</button>
    </div>
  );
}

export default Counters;
