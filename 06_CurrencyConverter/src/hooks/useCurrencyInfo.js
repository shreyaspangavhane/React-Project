import { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json) // convert that response to json 
            .then((res) => setData(res[currency])) //cuurency=>hold the perticular currency name data
        console.log(data);

    }, [currency])
    console.log(data);
    return data //return the value of currency data

}
export default useCurrencyInfo