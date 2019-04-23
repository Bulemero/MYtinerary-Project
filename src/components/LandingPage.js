import React, { Component } from "react";
import logo from "../images/MYtineraryLogo.png";
import arrow from "../images/circled-right-2.png";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-landing">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
        <img src={arrow} className="App-arrow" alt="arrow" />
      </div>
    );
  }
}

export default LandingPage;
