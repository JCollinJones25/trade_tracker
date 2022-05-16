import { Link } from "react-router-dom";

function Results(props) {
    return (
      <div className="result">
        <Link to={`/${props.stock}`}>
          <p>{props.stock}</p>
        </Link>
      </div>
    );
  };


export default Results;
