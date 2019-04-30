import React, { Component } from "react";
import account from "../images/newAccount.png";
import MainMenu from "./MainMenu";

export class Header2 extends Component {
  render() {
    return (
      <div className="App-header">
        <div>
          <img src={account} className="App-account" alt="new Account" />
        </div>
        <div>
          <MainMenu />
        </div>
      </div>
    );
  }
}

export default Header2;
