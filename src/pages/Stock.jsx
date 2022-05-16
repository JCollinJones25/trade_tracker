import Nav from "../components/Nav";

const Stock = (props) => {
  console.log(props);

  const loaded = () => {
    return (
      <>
        <Nav />
        <h1>{props.ticker}</h1>
        <h2>{props.name}</h2>
        <h3>${props.price} / share</h3>
        <p>Market Cap: {props.market_cap}</p>
        <p>Day high: {props.day_high}</p>
        <p>Day low: {props.day_low}</p>
      </>
    );
  };

  const loading = () => {
    return <h3>FETCHING DATA...</h3>;
  };

  return props ? loaded() : loading();
};

export default Stock;
