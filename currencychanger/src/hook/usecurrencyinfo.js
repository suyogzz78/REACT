import { useEffect } from "react";

//custom hook in react
 const useCurrencyInfo = (currency) => {
    const [data,setdata] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))

    }
    , [currency]);
    console.log(data);
    return data;



}
export default useCurrencyInfo;