import React, { Component } from 'react';

export default class InfoPanel extends Component {
    render (props) {
        return (
            <div class="col info-panel">
                <h1 class="row justify-content-center pt-3" style={{color: '#ffffff'}}><strong><b>HIGHEST BET LIMITS</b></strong></h1>
                <div class="row justify-content-center pt-3" >
                    <div style={{borderTop: '7px solid #ff5500', width: '25px', alignSelf: 'center'}}>
                    </div>
                </div>
                <h2 class="row justify-content-center pt-3" style={{color: '#ff5500'}}>Bet up to $30k on EPL as standard</h2>
                <div class="row justify-content-center pt-5 pb-3">
                    <button type="button" class="btn btn-outline-white waves-effect">Learn more</button>
                    <button type="button" class="btn btn-success waves-effect">Open Account</button>
                </div>
            </div>
        );
    }
}