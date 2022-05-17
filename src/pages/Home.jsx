
import Search from "../components/Search";
import Header from "../components/Header";
import Nav from '../components/Nav'

const Home = () => {
  return (
    <>
      <Header />
      <h1>Welcome to Trade Tracker</h1>
      <h4>Your Home For Simplified Stock Market Data</h4>
      <Search />
    </>
  );
};

export default Home