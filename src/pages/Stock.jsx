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
      // console.log(data);
      setStock(data.data[0]);
      // console.log(stock);
      // console.log(typeof(stock.date));
      const prices = data.data;
      // console.log(prices);

      // defining hour as empty array to push first 100 timestamps into to get smaller range of times on x axis
      let hour = [];
      for (let i = 0; i < 100; i++) {
        hour.push(prices[i]);
      }
      // console.log(hour);

      // another time range option 
      let day = []
      for (let i = 0; i < 380; i++) {
        day.push(prices[i]);
      }
      // console.log(day)

      const price = hour.map((time, idx) => ({
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

  // replacing letters in data with 
  // empty string so date is more readable 
    // const dateString =  stock.date
    // const newDate = dateString.replace('T', " ")
    // const finalDate = newDate.replace(".000Z", "")

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
            {/* {function changeDate() {
              const dateString =  stock.date
              const newDate = dateString.replace('T', " ")
              const finalDate = newDate.replace(".000Z", "")
                return (
                <h1>{finalDate}</h1> 
                )
              }
            } */}
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
