import React, { useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello from Increment!");
  };

  const sayMessage = (message) => {
    alert(message);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => sayMessage("welcome")}>Say Welcome</button>
      <button onClick={handlePress}>Click on me</button>

      <hr />
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <CurrencyConverter />
    </div>
  );
}

export default App;
