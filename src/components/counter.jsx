import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (<section className="counter">
    <p> counter: {counter}</p>
    <button onClick={() => (setCounter(counter + 1))}> click me </button>
  </section>)
}

export default Counter;