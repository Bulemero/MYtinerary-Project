import React from "react";

const MainMenu = () => {
  return (
    <nav>
      <div>
        <a>Main Menu</a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cities">Cities</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
          <li>
            <a href="/login">LogIn</a>
          </li>
          <li>
            <a href="/mytinerary">MYtinerary</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
