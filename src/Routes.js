import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from "./pages/Mainpage/Mainpage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
