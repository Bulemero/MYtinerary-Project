import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class MainMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="cities" className="menu-item" href="/cities">
          Cities
        </a>
        <a id="signup" className="menu-item" href="/signup">
          Sign Up
        </a>
        <a id="login" className="menu-item" href="/login">
          Log In
        </a>
      </Menu>
    );
  }
}

export default MainMenu;

/* const MainMenu = () => {
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
            <NavLink to="/mytinerary">MYtinerary</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}; */
