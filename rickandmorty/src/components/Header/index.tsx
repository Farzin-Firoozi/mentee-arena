import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.style.css";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="headerContainer">
      <nav>
        <Link style={{ color: pathname === "/" ? "#000" : "" }} to="/">
          Home
        </Link>
      </nav>
      <nav>
        <Link style={{ color: pathname === "/search" ? "#000" : "" }} to="/search">
          Search
        </Link>
      </nav>
      <nav>
        <Link style={{ color: pathname === "/bookmark" ? "#000" : "" }} to="/bookmark">
          Bookmark
        </Link>
      </nav>
    </header>
  );
};
export default Header;
