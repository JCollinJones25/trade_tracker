import SearchContainer from "./SearchContainer";
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav">
        <Link to="/">
          Home Page
        </Link>
      <div className="nav-search">
      <SearchContainer />
      </div>
    </div>
  );
};

export default Nav;
