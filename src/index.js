import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Scene/Home/Home.js';
import PrivateContests from './Scene/PrivateContests/PrivateContests.js';
import Livescores from './Scene/Livescores/Livescores.js';
import Casino from './Scene/Casino/Casino.js';
import Mobile from './Scene/Mobile/Mobile.js';
import AboutUs from './Scene/AboutUs/AboutUs.js';
import Payment from './Scene/Payment/Payment.js';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/privatecontests" component={PrivateContests}/>
          <Route path="/livescores" component={Livescores}/>
          <Route path="/casino" component={Casino}/>
          <Route path="/mobile" component={Mobile}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/payment" component={Payment}/>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, window.document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
