import Search from "../components/Search";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-text">
        <h1>Welcome to Trade Tracker</h1>
        <h4>Your Home For Simplified Stock Market Data</h4>
        <div className="home-search"></div>
      </div>
      <Search />
    </>
  );
};

export default Home;
