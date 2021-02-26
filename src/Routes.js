import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MainPage from './pages/Mainpage/Mainpage';

class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
