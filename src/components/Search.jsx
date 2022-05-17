import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Search = (props) => {

    console.log(props + " props on search")

    const [stock, setStock] = useState(null)
    const navigate = useNavigate();

    function handleSearch(e) {
        console.log(e.target.value)
        setStock(e.target.value)
        }
        console.log(stock + " stock")
        
    function handleSubmit(e) {
        e.preventDefault()
        console.log(stock + " stock after submit")
        navigate(`/${stock}`);
    }
    
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
        </>
      );
}

export default Search