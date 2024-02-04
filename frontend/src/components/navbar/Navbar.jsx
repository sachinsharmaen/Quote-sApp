import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div id="logo">
          <img
            id="logo"
            src="https://i.pinimg.com/736x/4c/52/de/4c52def8be9d3036217285d78171c563.jpg"
            alt=""
          />
        </div>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quotes/new">Create Quote</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
