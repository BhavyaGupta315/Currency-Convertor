import { useState, useEffect } from "react";


export function useCurrencyInfo(currencyName){
    const [currencyData, setCurrencyData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyName}.json`)
          .then((res) => res.json())
          .then((res)=>setCurrencyData(res[currencyName]))
      }, [currencyName]);
      return currencyData;
}

export function useAllCurrencyInfo(){
    const [currencyData, setCurrencyData] = useState({});
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
          .then((res) => res.json())
          .then((res)=>setCurrencyData(res))
      }, []);
      return currencyData;
}
  