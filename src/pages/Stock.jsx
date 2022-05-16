import { useState, useEffect } from 'react'
import Nav from "../components/Nav";
import { useParams } from 'react-router-dom'

const Stock = () => {
  const params = useParams()
  const stockId = params.stock

  const [stock, setStock] = useState(null)

  const apiKey = process.env.REACT_APP_API
  const URL = `https://api.stockdata.org/v1/data/quote?symbols=${stockId}&api_token=${apiKey}`

  async function getStock() {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setStock(data.data[0])
  }

  useEffect(() => {
      getStock()
  }, [])


  const loaded = () => {
    return (
      <>
        <Nav />
        <h1>{stock.ticker}</h1>
        <h2>{stock.name}</h2>
        <h3>${stock.price} per share</h3>
        <p>Market Cap: {stock.market_cap}</p>
        <p>Day high: {stock.day_high}</p>
        <p>Day low: {stock.day_low}</p>
      </>
    );
  };

  const loading = () => {
    return <h3>FETCHING DATA...</h3>;
  };

  return stock ? loaded() : loading();
};

export default Stock;
