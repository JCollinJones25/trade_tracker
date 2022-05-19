import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Search = (props) => {
  const [stock, setStock] = useState(null);
  const [searchState, setSearchState] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  function handleSearch(e) {
    setStock(e.target.value);
    setSearchState(e.target.value);
    console.log(searchState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/${stock}`)
  }

  const showResults = async (e) => {
    const URL = `https://ticker-2e1ica8b9.now.sh/keyword/${searchState}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    data ? setResults(data) : setResults([]);
    // if (searchState ==="") {
      //   setResults([])
      // } else {
        //   setResults(data)
        // }
    console.log(results[0].name + " first result name");
    console.log(results)
  };

  useEffect(() => {
    showResults();
  }, []);

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={stock}
          className="searchbar"
          name="search"
          placeholder="Enter any stock ticker"
          stock={props.stock}
          onChange={handleSearch}
        />
      </form>
      <div className="results">
        {results ? (
          results.map((stock, idx) => {
            return (
              <div className="result" key={idx}>
                <Link to={`/${stock.symbol}`}>
                  <p>
                    {stock.symbol} - {stock.name}
                  </p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Search;
