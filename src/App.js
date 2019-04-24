import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import css from "./App.css";
import MainMenu from "./components/MainMenu";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Cities from "./components/Cities";
import LogIn from "./components/LogIn";
import MYtinerary from "./components/MYtinerary";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <MainMenu />
          <Route exact path="/" component={LandingPage} />
          <Route path="/cities" component={Cities} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/mytinerary" component={MYtinerary} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
