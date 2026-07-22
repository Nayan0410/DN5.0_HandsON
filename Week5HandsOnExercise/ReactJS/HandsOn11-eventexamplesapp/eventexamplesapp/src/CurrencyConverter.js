import { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (currency.toLowerCase() === "euro") {
      const rupees = Number(amount) * 80;

      alert(`Converting to Rupees Amount is ${rupees}`);
    } else {
      alert("Please enter Euro as currency.");
    }
  }

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Converter!!!</h1>

      <form onSubmit={handleSubmit}>
        <label>Amount:</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <label>Currency:</label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
