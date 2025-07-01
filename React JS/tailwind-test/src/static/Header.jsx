import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <nav>Home</nav>
      </Link>
      <Link to="/buynow">
        <nav>Buy now</nav>
      </Link>
      <Link to="/contact">
        <nav>Contact</nav>
      </Link>
    </div>
  );
};

export default Header;
