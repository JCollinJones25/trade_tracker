import Search from "../components/Search";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-text">
        <h1>Welcome to Trade Tracker</h1>
        <h4>Your Home For Simplified Stock Market Data</h4>
        <div className="home-search"></div>
      </div>
      <h4>
        Follow any of the links below to get started or search any stock ticker
      </h4>
      <Search />
      <div className="stock-links">
        <div className="stock-links-1">
          <Link to="/spy">S&P 500 ETF (SPY)</Link>
          <Link to="/aapl">Apple (AAPL)</Link>
          <Link to="/goog">Google (GOOG)</Link>
          <Link to="/tsla">Tesla Inc. (TSLA)</Link>
          <Link to="/fb">META (FB)</Link>
        </div>
        <div className="stock-links-2">
          <Link to="/amzn">Amazon (AMZN)</Link>
          <Link to="/msft">Microsoft (MSFT)</Link>
          <Link to="/mcd">McDonald's Corp (MCD)</Link>
          <Link to="/sbux">Starbucks Corp (SBUX)</Link>
          <Link to="/cost">Costco Wholesale (COST)</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
