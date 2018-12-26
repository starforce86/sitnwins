import React from 'react';
import LoginBar from './LoginBar';
import Navigation from './Navigation';
import './Top.css';

const FixedHeader = props => (
    <div class="top-fixed">
        <LoginBar />
        <Navigation />
    </div>
)

export default FixedHeader;