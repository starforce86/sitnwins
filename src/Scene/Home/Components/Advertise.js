import React, { Component } from 'react';
import './component.css';

export default class Advertise extends Component {
    render () {
        return (
            <div class="row px-0 mx-0 advertise2">
                <div class="col-lg-9">
                    <h2 class="pt-4 pb-5" style={{color: '#ff5500'}}><strong>Welcome to your sitnwins account!</strong></h2>
                    <h6 class="pt-3" style={{color: '#ffffff'}}><strong>View all Pending Bets in the last 24Hrs</strong></h6>
                    <h6 class="pt-3" style={{color: '#ffffff'}}><strong>View Graded Bets in the last 24Hrs</strong></h6>
                    <h6 class="pt-3 pb-3" style={{color: '#ffffff'}}><strong>Deposit or withdraw Funds</strong></h6>
                </div>
                <div class="col-sm-3 mx-auto">
                    <div class="align-self-center mx-auto pt-5">
                        <h6 class="row justify-content-center" style={{color: "#ffffff"}}>Quick & Easy Despoit</h6>
                        <button type="button" class="row btn btn-success btn-lg btn-rounded waves-effect deposit-btn">Deposit Now</button>
                    </div>
                </div>
            </div>            
        );
    }
}