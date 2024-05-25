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
        <h1>Counter: {count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

 export default Counter;
