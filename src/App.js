import "./App.css";
import { Outlet } from 'react-router'

const App = () => {

  // const [stocks, setStocks] = useState(null)

  // const apiKey = process.env.KEY
  // const URL = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=${apiKey}`;

  // const getStocks = () => {
  //     fetch(URL)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);

  //       setStocks(result);
  //     });
  // };

  return (
  <div className="App">
    <Outlet />
  </div>
  )
}

export default App;
