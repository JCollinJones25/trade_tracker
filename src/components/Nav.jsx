import Search from "./Search";
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav">
        <Link to="/">Home Page</Link>
      <div className="nav-search">
        <Search />
      </div>
    </div>
  );
};

export default Nav;
