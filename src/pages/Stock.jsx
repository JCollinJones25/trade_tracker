import Nav from "../components/Nav";
import Buttons from '../components/Buttons'
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
  const [stockInfo, setStockInfo] = useState(null);
  const [prices, setPrices] = useState([])
  const [hour, setHour] = useState([])
  const [day, setDay] = useState([])
  const [xAxis, setXAxis] = useState(hour)

  const getStockInfo = async () => {
    const apiKey = process.env.REACT_APP_API;
    const URL = `https://api.stockdata.org/v1/data/quote?symbols=${stockId}&api_token=${apiKey}`;
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setStockInfo(result.data[0]);
      });
  };

  const getStocks = async () => {
    try {
      const apiKey = process.env.REACT_APP_API;
      const URL = `https://api.stockdata.org/v1/data/intraday?symbols=${stockId}&api_token=${apiKey}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setStock(data.data[0]);

      // prices = a weeks worth of data
      setPrices(data.data);

      // defining hour as empty array to push first 100 timestamps into to get smaller range of times on x axis
      let hourtimes = [];
      for (let i = 0; i < 50; i++) {
        hourtimes.push(prices[i]);
      }
      setHour(hourtimes)

      // another time range option
      let daytimes = [];
      for (let i = 0; i < 380; i++) {
        daytimes.push(prices[i]);
      }
      setDay(daytimes)

      const price = xAxis.map((time, idx) => ({
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
    getStockInfo();
  }, [stockId]);

  // chart data
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

  // function for error message if stock is undefined
  function invalidTicker() {
    return (
      <div className="error">
        <h3>Error: Invalid stock ticker entered</h3>
      </div>
    );
  }

  // replacing letters in data with
  // empty string so date is more readable
  function changeDate() {
    const dateString = stock.date;
    const newDate = dateString.replace("T", " | ");
    const finalDate = newDate.replace(".000Z", "");
    console.log(finalDate);
    return <h1>{finalDate}</h1>;
  }
  function laodingDate() {
    return <h1>Loading date...</h1>;
  }

  const loaded = () => {
    return (
      <>
        <Nav />
        <div className="stock-page">
          <div className="stock-info">
            <div className="stock-title">
                <h1>
                  {stock.ticker} {stockInfo.name}{" "}
                </h1>
              <div className="stock-price-change">
                <div className={[ "currentPrice", stockInfo.price > stockInfo.day_open ? "gains" : stockInfo.day_open > stockInfo.price ? "losses" : "", ].join(" ")}>
                <h2>${stock.data.open}</h2>
                </div>
                <div className={["dayChange", stockInfo.day_change > 0 ? "gains" : stockInfo.day_change < 0 ? "losses" : ""].join(" ")}>
                  <h2>({stockInfo.day_change}%)</h2>
              </div>
              </div>
            </div>
            {stock.date ? changeDate() : laodingDate()}
            <p>Market Cap: ${stockInfo.market_cap}</p>
            <div className="OHLC">
              <p>Open: ${stockInfo.day_open}</p>
              <p>High: ${stockInfo.day_high}</p>
              <p>Low: ${stockInfo.day_low}</p>
              <p>Close: ${stock.data.close}</p>
            </div>
            <div className="chart">
              {xAxis !== [] ? <Chart
                options={chart.options}
                series={series}
                type="candlestick"
                width="100%"
                height={320}
              /> : <p>Loading chart</p>}
              {/* <Buttons prices={prices} day={day} hour={hour}/>  */}
              <button onClick={setXAxis(hour)}>HR</button>
              <button onClick={setXAxis(day)}>D</button>
              <button onClick={setXAxis(prices)}>WK</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const loading = () => {
    return (
      <>
        <Nav />
        <div className="fetching">
          {stock === undefined ? invalidTicker() : <h3>FETCHING DATA...</h3>}
        </div>
      </>
    );
  };

  return stock ? loaded() : loading();
};

export default Stock;
