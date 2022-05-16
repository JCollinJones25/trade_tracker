import { useState, useEffect } from "react";

const Main = () => {
  const [stocks, setStocks] = useState(null);

  const apiKey = process.env.REACT_APP_API;
    // console.log(apiKey)
  const URL = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=${apiKey}`

  const getStocks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setStocks(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getStocks();
  }, []);

  console.log(stocks)

  const loaded = () => {
    return (
      <>
        {stocks.map((stock) => {
          return (
            <>
              <h1>{stock.ticker}</h1>
              <h2>{stock.name}</h2>
              <h3>${stock.price} / share</h3>
              <p>Market Cap: {stock.market_cap}</p>
              <p>Day high: {stock.day_high}</p>
              <p>Day low: {stock.day_low}</p>
            </>
          );
        })}
      </>
    );
  };

  const loading = () => {
    return <h3>FETCHING DATA...</h3>;
  };

  return stocks ? loaded() : loading();
};

export default Main;
