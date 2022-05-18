import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";

const Stock = (props) => {
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);
  const { stockId } = useParams();
  const [stock, setStock] = useState(null);

  const getStocks = async () => {
    try {
      const apiKey = process.env.REACT_APP_API;
      const URL = `https://api.stockdata.org/v1/data/intraday?symbols=${stockId}&api_token=${apiKey}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setStock(data.data[0]);
      console.log(stock);
      const prices = data.data;
      console.log(prices);

      let currentTime = [];

      for (let i = 0; i < 100; i++) {
        currentTime.push(prices[i]);
      }

      console.log(currentTime);

      const price = currentTime.map((time, idx) => ({
        x: new Date(time.date),
        y: [
          prices[idx].data.open,
          prices[idx].data.high,
          prices[idx].data.low,
          prices[idx].data.close,
        ],
      }));
      setSeries([
        {
          data: price,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStocks();
  }, [stockId]);

  const chart = {
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };


  const loaded = () => {
    return (
      <>
        <Nav />
        <div className="stock-page">
          <div className="stock-info">
            <div className="ticker-price">
              <h1>{stock.ticker}</h1>
              <div className={[ "currentPrice", stock.data.close > stock.data.open ? "gains" : stock.data.open > stock.data.close ? "losses" : ""]}>
                <h2>${stock.data.open}</h2>
              </div>
            </div>
            <h1>{stock.date}</h1>
            <div className="OHLC">
              <p>Open: ${stock.data.open}</p>
              <p>High: ${stock.data.high}</p>
              <p>Low: ${stock.data.low}</p>
              <p>Close: ${stock.data.close}</p>
            </div>
            <div className="chart">
              <Chart
                options={chart.options}
                series={series}
                type="candlestick"
                width={750}
                height={320}
              />
            </div>
          </div>
        </div>
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
