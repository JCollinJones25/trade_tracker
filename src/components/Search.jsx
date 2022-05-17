import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Search = (props) => {

    const [stock, setStock] = useState(null)
    const navigate = useNavigate();

    function handleSearch(e) {
        setStock(e.target.value)
        }
        
    function handleSubmit(e) {
        e.preventDefault()
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