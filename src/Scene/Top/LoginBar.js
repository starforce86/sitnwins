import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import './Top.css';
import brand from './img/brand.png';
import flag from './img/flag.png';
import { Button } from 'mdbreact';


const LoginBar = props => (
  <div class="app-header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-auto">
          <Link to="/aboutus" class="navbar-brand" >
            <img class="brand-img" src={brand} alt="brand"/>
          </Link>
        </div>

        <div className="hdivider"></div>

        <div class="col-0">
          <Link to="/" class="nav-link">
              <img class="flag" src={flag} alt="flag"/>
          </Link>
        </div>

        <div className="hdivider"></div>

        <div class="col-0">
          <Link to="/decimalodds" class="nav-link">
            Decimal Odds
          </Link>
        </div>

        <div className="hdivider"/>
        <div class="hdivider" />

        <div class="col-auto xr-0">
          <div>
            <input class="header-input" type="clientId" placeholder="Client Id" name='clientId' aria-label="clientId" autofocus/>
          </div>
          <Link to="/forgotid" className="text-hint justify-content-left">Forgot Client ID?</Link>
        </div>

        <div class="col-auto px-0 mx-0">
          <div>
            <i class="glyphicon glyphicon-eye-open"></i>
            <input class="header-input mr-sm-2" type="password" placeholder="Password" name='password' aria-label="password"/>
          </div>
            <Link to="/forgotpwd" className="text-hint">Forgot Password?</Link>
        </div>

        <Button color="blue-grey" size="md">Login</Button>

        <Button color="success" size="md">Open Account</Button>
      </div>
    </div>
  </div>
)

export default LoginBar;