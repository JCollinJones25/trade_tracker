import Nav from '../components/Nav'


const Stock = (props) => {
  
    console.log(props)

    const loaded = () => {
        return (
        <>
        <Nav />
        {props.map((stock) => {
            return (
              <>
                <h1>{stock.ticker}</h1>
                <h2>{stock.name}</h2>
                <h3>${stock.price} / share</h3>
                <p>Market Cap: {stock.market_cap}</p>
                <p>Day high: {stock.day_high}</p>
                <p>Day low: {stock.day_low}</p>
              </>
            );
          })}
        </>
      );
    };
  
    const loading = () => {
      return <h3>FETCHING DATA...</h3>;
    };
  
    return props ? loaded() : loading();
}

export default Stock