import SearchContainer from "./SearchContainer";
import Header from './Header'
import { useState, useEffect } from 'react'

const Main = () => {

    const [stocks, setStocks] = useState(null)

    const apiKey = process.env.REACT_APP_API;
    const URL = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TESLA,GOOG&api_token=${apiKey}`

    async function getStocks() {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setStocks(data.data)
    }

    useEffect(() => {
        getStocks();
    }, []);

    return (
    <>
    <Header />
    <h1>Welcome to Trade Tracker</h1>
    <h3>Search Stock Market Data Using a Valid Ticker</h3>  
    <SearchContainer />
    </>
  );
};

export default Main;
