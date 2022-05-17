import SearchContainer from "./SearchContainer";
import Header from './Header'

const Main = () => {
    return (
    <>
    <Header />
    <h1>Welcome to Trade Tracker</h1>
    <h3>Search Current Stock Market Data</h3>  
    <SearchContainer />
    </>
  );
};

export default Main;
