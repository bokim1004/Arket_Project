import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/Mainpage/Mainpage";
import LoginBox from "./components/LoginBox/LoginBox";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Footer" component={Footer} />
          <Route exact path="/LoginBox" component={LoginBox} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
