import Search from "../components/Search";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-text">
        <h1>Welcome to Trade Tracker</h1>
        <div className="instructions">
          <h3>Enter a valid stock ticker in the search bar</h3>
          <h3>Don't know the ticker?</h3>
          <h3>Just type the company name and view the search results</h3>
        </div>
        <div className="home-search"></div>
      </div>
      <Search />
    </>
  );
};

export default Home;
