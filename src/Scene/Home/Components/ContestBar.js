import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import contestIcon from './img/contests/contest.png';
import friendIcon from './img/contests/friend.png';
import './component.css';

export default class ContestBar extends Component {
    render () {
        return (
            <div class="row align-items-right justify-content-end mx-0 contest-bar">
                <div class="col-auto justify-content-center">
                    <img src={contestIcon} class="small-icon" alt="contest" />
                    <Link to="/newcontest" class="small-text ml-2 d-inline-block">Create a private contest</Link>
                </div>
                <div class="col-auto justify-content-center">
                    <img src={friendIcon} class="small-icon" alt="friend" />
                    <Link to="/referfriend" class="small-text ml-2 d-inline">Refer a friend</Link>
                </div>
                <div class="row align-items-center justify-content-center mx-1">
                    <div class="next-start">NEXT START:</div>
                    <div class="count-down ml-2">00:00:00</div>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn-sm-1 btn-warning">Enter private contest</button>
                </div>
            </div>
        );
    }
}