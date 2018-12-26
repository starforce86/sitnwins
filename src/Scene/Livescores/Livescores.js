import React from 'react'
import Header from '../Top/Header.js';
import { element } from 'prop-types';

export default class Livescores extends React.Component {
  render () {
    return (
      <element>
        <Header />
        <h1>Livescores</h1>
      </element>
    );
  }
}
