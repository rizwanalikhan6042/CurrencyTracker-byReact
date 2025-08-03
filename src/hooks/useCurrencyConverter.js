import { useState } from "react";


function useCurrencyConverter(){
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency]=useState("USD");
    const [toCurrency, setToCurrency]=useState("INR");
    const currencyOptions=["USD","INR","EUR", "GBP", "AUD", "JPY"];


    return {
        amount,setAmount,fromCurrency,toCurrency,setFromCurrency,setToCurrency,currencyOptions
    }

}
export default useCurrencyConverter;