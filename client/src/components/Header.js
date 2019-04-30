import React, { Component } from "react";
import account from "../images/newAccount.png";
import home from "../images/homeIcon.png";

export class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <div>
          <img src={account} className="App-account" alt="new Account" />
        </div>
        <div>
          <img src={home} className="App-home" alt="Home" />
        </div>
      </div>
    );
  }
}

export default Header;
