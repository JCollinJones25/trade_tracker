import Search from "./Search";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="nav">
      <div id="back-text">
        <Link to="/">← Back to Home Page</Link>
      </div>

      <div className="sidebar">
        <Hamburger 
          size={25}
          distance="sm"
          onClick={showSidebar}
          toggled={sidebar}
          toggle={setSidebar}>
        </Hamburger>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Hamburger
                distance="sm"
                size={25}
                onClick={showSidebar}
                toggled={sidebar}
                toggle={setSidebar}
              ></Hamburger>
            </li>
            <li><div className="nav-search"><Search /></div></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
