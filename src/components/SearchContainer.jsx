import { useState, useEffect } from "react";
import Search from "./Search"
import Results from "./Results"

const SearchContainer = () => {

    const [searchState, setSearchState] = useState('')
    const [stocks, setStocks] = useState(null);

    const apiKey = process.env.REACT_APP_API;
    const URL = `https://api.stockdata.org/v1/data/quote?symbols=${searchState}&api_token=${apiKey}`
  
    const getStocks = async (e) => {
        e.preventDefault()
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setStocks(data.data);
        console.log(data.data);
    };
  
    useEffect(() => {
      getStocks();
    }, []);
  

    function handleSearch(e) {
        setSearchState(e.target.value)
        console.log(searchState)
      }

    console.log(stocks)

    return (
        <>
          <Search
            onSubmit={getStocks}
            onChange={handleSearch}
            stock={searchState}
          />
          <Results stocks={stocks} />
        </>
      );
}

export default SearchContainer