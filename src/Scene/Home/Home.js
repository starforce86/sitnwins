import React from 'react'
import Header from '../Top/Header';
import Mainboard from './Board/MainBoard';
import FooterPanel from '../Footer/FooterPanel';
import PayPanel from '../PayPanel/Paypanel';
import { element } from 'prop-types';

export default class Home extends React.Component {
  render () {
    return (
      <element>
        <Header />
        <Mainboard />
        <PayPanel/>
        <FooterPanel />
      </element>
    );
  }
}