import { useState, useEffect } from "react";

function useCurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const currencyOptions = ["USD", "INR", "EUR", "GBP", "AUD", "JPY"];

  const handleConvert = () => {
    if (!amount || fromCurrency === "" || toCurrency === "") return;

    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    const url = `https://v6.exchangerate-api.com/v6/67c5f98a0b9f7ceab2f9e407/pair/${fromCurrency}/${toCurrency}/${amount}`;
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setConvertedAmount(data.conversion_result || data.result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching conversion rate:", err);
        setConvertedAmount(null);
        setIsLoading(false);
      });
  };

  // Optional: auto convert when values change
  useEffect(() => {
    handleConvert();
  }, [amount, fromCurrency, toCurrency]);

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    currencyOptions,
    convertedAmount,
    handleConvert,
    isLoading
  };
}

export default useCurrencyConverter;
