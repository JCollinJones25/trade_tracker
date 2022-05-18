import Nav from "../components/Nav";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Chart from 'react-apexcharts'

const Stock = (props) => {

  const [series, setSeries] = useState([{
    data: []
  }])
  const { stockId } = useParams()
  const [stock, setStock] = useState(null);

  const getStocks = async () => {
    try {
      const apiKey = process.env.REACT_APP_API;
      const URL = `https://api.stockdata.org/v1/data/intraday?symbols=${stockId}&api_token=${apiKey}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data)
      setStock(data.data[0])
      console.log(stock); 
      const prices = data.data
      console.log(prices)
      console.log(data.data[0].date)
      const price = prices.map((time, idx) =>(
        {
          x: new Date(time.date),
          y: [prices[idx].data.open, prices[idx].data.high, prices[idx].data.low, prices[idx].data.close]
        }
      ))
      setSeries([{
        data: price,
      }])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStocks();
  }, [stockId]);

const chart = {
          
  series: [{
    data: []
  }],
  options: {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  },
};


  const loaded = () => {
    return (
      <>
        <Nav />
        <div className="stock-page">
          <div className="stock-info">
            <h1>{stock.ticker}</h1>
            <p>Open: ${stock.data.open}</p>
            <p>Close: ${stock.data.close}</p>
            <p>High: ${stock.data.high}</p>
            <p>Low: ${stock.data.low}</p>
          </div>
        </div>
        <Chart options={chart.options} series={series} type="candlestick" width={500} height={320} />

      </>
    );
  };

  const loading = () => {
    return (
      <div className="fetching">
        <h3>FETCHING DATA...</h3>
      </div>
    );
  };

  return stock ? loaded() : loading();
};

export default Stock;
