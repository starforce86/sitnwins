import React from 'react'
import Header from '../Top/LoginBar.js';
import Navigation from '../Top/Navigation.js';
import SubNavigation from '../Top/SubNavigation.js';

export default class Casino extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Navigation />
        <SubNavigation />
        <h1>Casino Cards Lotto</h1>
      </div>
    );
  }
}
