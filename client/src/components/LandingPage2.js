import React, { Component } from "react";
import logo from "../images/MYtineraryLogo.png";
import arrow from "../images/circled-right-2.png";
import NewAccount from "./NewAccount";
import Footer from "./Footer";

export class LandingPage2 extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-landing">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
        <h2 className="App-browsing">Start browsing</h2>
        <img src={arrow} className="App-arrow" alt="arrow" />
        <NewAccount />
        <Footer />
      </div>
    );
  }
}

export default LandingPage2;
