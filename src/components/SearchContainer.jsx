import { useState, useEffect } from "react";
import Search from "./Search"

const SearchContainer = () => {

    const [searchState, setSearchState] = useState('')

    const [stock, setStock] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{

        const apiKey = process.env.REACT_APP_API;

        const URL = `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${apiKey}`

        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setStock(data.data);
      } catch (error) {
        console.log(error)
      }
    };
  
    useEffect(() => {
      handleSubmit();
    }, []);
  

    function handleSearch(e) {
        setSearchState(e.target.value)
        setStock(e.target.value)
        console.log(stock)
      }
      
      console.log(searchState)

    return (
        <>
          <Search
            onSubmit={handleSubmit}
            onChange={handleSearch}
            value={searchState}
          />
        </>
      );
}

export default SearchContainer