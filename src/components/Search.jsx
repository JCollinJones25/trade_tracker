
const Search = (props) => {
    return (
        <>
          <form className="search-form" onSubmit={props.onSubmit}>
            <input
              type="text"
              className="searchbar"
              name="search"
              placeholder="Enter stock ticker"
              value={props.value}
              onChange={props.onChange}
            />
          </form>
        </>
      );
}

export default Search