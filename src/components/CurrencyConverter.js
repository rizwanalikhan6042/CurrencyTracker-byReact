import React from "react";
import useCurrencyConverter from "../hooks/useCurrencyConverter";
import "../components/CurrencyConverter.css";

function CurrencyConverter(){
    const {amount, setAmount,fromCurrency, setFromCurrency,
    toCurrency, setToCurrency,currencyOptions,convertedAmount,handleConvert, setConvertedAmount} = useCurrencyConverter();
    
    return (
        <div className="converter-container">
            <h2 className="title">Currency Converter</h2>
            <div className="input-group">
            <input  className="input-field" type="number" value={amount} onChange={(e)=>{
                setAmount(Number(e.target.value))
            }} />
             {/* From Currency Dropdown */}
            <select className="dropdown" value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)} >
                {currencyOptions.map((cur)=>(
                    <option key={cur} value={cur}  >{cur}</option>
                ))}
            </select>
             <span className="to-label">to</span>
             {/* To Currency Dropdown */}
            <select className="dropdown" value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)} >
                {currencyOptions.map((cur)=>(
                    <option key={cur} value={cur}  >{cur}</option>
                ))}
            </select>
            </div>
            {/* Convert Button */}
            <button className="convert-button" onClick={handleConvert}> Convert </button>
            <h2 className="result">
                Converted Amount: {convertedAmount !== null
          ? <span>{convertedAmount} {toCurrency}</span>
          : "N/A"}
            </h2>
        </div>
    )




}

export default CurrencyConverter;
