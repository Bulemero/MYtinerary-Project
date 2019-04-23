import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Slider from "./components/Slider";
import css from "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Slider />
      </div>
    );
  }
}

export default App;
