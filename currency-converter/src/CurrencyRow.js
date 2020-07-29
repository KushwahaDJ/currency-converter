import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOption,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props;

  return (
    <div>
      <input
        className="input"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOption.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
