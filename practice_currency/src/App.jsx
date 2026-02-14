import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  // State to store entered amount
  const [amount, setAmount] = useState("");

  // State to store selected "From" currency
  const [fromCurrency, setFromCurrency] = useState("USD");

  // State to store selected "To" currency
  const [toCurrency, setToCurrency] = useState("INR");

  // State to store result (static for now)
  const [result, setResult] = useState("0");

  const [currencies , setCurrencies] = useState([])

  const f1 = () => {
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      setCurrencies(Object.keys(data.rates));
    })
    .catch((error) => {
      console.log("Error fetching currencies:", error);
    });
};

useEffect(() => {
  f1();
}, []);

  const conver_dh = async () => {
    if (!amount) return;

    try {
      const data = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
      );

      const d1 = await data.json();
      const r1 = d1.rates[toCurrency];

      setResult(amount * r1);
    } catch (error) {
      console.log(error);
    }
  };
  const s1 = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    // Full screen container (center content)
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Card container */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Currency Converter
        </h2>

        {/* Amount Input Section */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* From Currency Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">From</label>

          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            {/* Static options for now */
            currencies.map((cc) =>(
              <option key = {cc} value={cc}>{cc}</option>
            ))
            }
            
          </select>
        </div>

        {/* Swap Button (UI only) */}
        <button
          className="w-full mb-4 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
          onClick={s1}
        >
          Swap
        </button>

        {/* To Currency Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">To</label>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            {/* Static options for now */
            currencies.map((cc) =>(
              <option key = {cc} value={cc}>{cc}</option>
            ))
            }
          </select>
        </div>

        {/* Convert Button (No functionality yet) */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={conver_dh}
        >
          Convert
        </button>

        {/* Result Display Section */}
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-gray-600">Converted Amount</h3>

          {/* Showing static result */}
          <p className="text-2xl font-bold mt-2 text-blue-600">
            {result} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
