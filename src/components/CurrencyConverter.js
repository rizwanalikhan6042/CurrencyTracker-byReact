import React from "react";
import useCurrencyConverter from "../hooks/useCurrencyConverter";


function CurrencyConverter(){
    const {amount, setamount,fromCurrency, setFromCurrency,
    toCurrency, setToCurrency,currencyOptions} = useCurrencyConverter();
    
    return (
        <div>
            <h2>Currency Converter</h2>
            <input type="number" value={amount} onChange={(e)=>{
                setamount(e.target.value)
            }} />
            <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)} >
                {currencyOptions.map((cur)=>(
                    <option key={cur} value={cur}  >{cur}</option>
                ))}
            </select>
            <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)} >
                {currencyOptions.map((cur)=>(
                    <option key={cur} value={cur}  >{cur}</option>
                ))}
            </select>
        </div>
    )




}

export default CurrencyConverter;
