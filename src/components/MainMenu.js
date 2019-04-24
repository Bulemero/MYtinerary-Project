import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <nav>
      <div>
        <a>Main Menu</a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/mytinerary">MYtinerary</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
