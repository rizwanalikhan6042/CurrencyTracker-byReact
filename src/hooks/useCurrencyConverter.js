import { useState, useEffect } from "react";

function useCurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currencyOptions,setCurrencyOptions]=useState([])
    const [rates,setRates]=useState({})

    useEffect(() => {
        if (!fromCurrency) return;

        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        setIsLoading(true);

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
                setRates(data.rates);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching rates:", err);
                setIsLoading(false);
            });
    }, [fromCurrency]);
    const handleConvert = () => {
        if (!amount || !rates ||fromCurrency === "" || toCurrency === "") return;

        const rate = rates[toCurrency];
        if (rate) {
            setConvertedAmount((amount * rate).toFixed(2));
        } else {
            setConvertedAmount(null);
        }

        
    };

    // Optional: auto convert when values change
    // useEffect(() => {
    //     handleConvert();
    // }, [amount, fromCurrency, toCurrency]);

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
