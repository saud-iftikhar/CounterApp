import React, { useState } from 'react';
  // import './App.css';

 const Counter = () =>  {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header className="App-header"> 
        <h1 data-testid="counter">Counter: {count}</h1>
        <button id="increment" onClick={plus}>+</button>
        <button data-testid="decrement" onClick={minus}>-</button>
        <button data-testid="reset"onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

 export default Counter;
