import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const inrAmount = parseFloat(amount);
    const conversionRate = 0.011; // Example: 1 INR = 0.011 Euro
    const converted = (inrAmount * conversionRate).toFixed(2);

    alert(`Converting to Euro amount: €${converted}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Currency:
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CurrencyConverter;
