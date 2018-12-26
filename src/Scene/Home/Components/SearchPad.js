import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Icon from '@material-ui/core/Icon';
import starIcon from './img/star.png';
import './component.css';

export default class SearchPad extends Component {
    
    state = {
        showFilter: true,
        iconClass: 'fa fa-angle-up',
    }

    onfilterVisible = () => {
        
        this.setState( {
            showFilter: !this.state.showFilter,
            iconClass: this.state.showFilter ? 'fa fa-angle-down arrow-button' : 'fa fa-angle-up arrow-button'
        })
    }

    render () {
        return (
            <div class="search-pad mx-0 px-0 pt-1 h-100 no-select">
                <SearchInput />
                <div class="col small-text grey-text mx-auto">Entry Fee</div>
                <div class="row mx-2 px-0 py-0 align-items-center justify-content-center">
                    <select className="col-md h-50 small-text mx-0 py-0 pl-1 pr-0 browser-default custom-select">
                        <option value="1">Free</option>
                        <option value="2">$10+</option>
                        <option value="3">$100+</option>
                        <option value="4">$1000+</option>
                        <option value="5">$10000+</option>
                    </select>
                    <div class="col-sm-1 grey-text mx-1 px-0 text-center">to</div>
                    <select className="col-md h-50 small-text mx-0 py-0 pl-1 pr-0 browser-default custom-select">
                        <option value="1">$10+</option>
                        <option value="2">$100+</option>
                        <option value="3">$1000+</option>
                        <option value="4">$10000+</option>
                    </select>
                </div>
                <div class="row justify-content-start mx-auto">
                    <div class="col-auto small-text grey-text align-self-center justify-content-center">Contest types</div>
                    <Icon style={{color: 'grey'}} size={10}>info</Icon>
                </div>
                <div class="row mx-1 justify-content-center">
                    <ul class="col mx-1 px-0">
                        <li class="contest-types d-flex flex-row selected small-text grey-list-text px-2 py-1">All</li>
                        <li class="contest-types d-flex flex-row small-text grey-list-text px-2 py-1 justify-content-between">Featured<img src={starIcon} class="" width="12px" height="12px" alt="featured"/></li>
                        <li class="contest-types d-flex flex-row small-text grey-list-text px-2 py-1">Tournaments</li>
                        <li class="contest-types d-flex flex-row small-text grey-list-text px-2 py-1">Jackpot Games</li>
                        <li class="contest-types d-flex flex-row small-text grey-list-text px-2 py-1">Head to Head</li>
                        <li class="contest-types d-flex flex-row small-text grey-list-text px-2 py-1">50/50s & Double Ups</li>
                    </ul>
                </div>
                <div class="row small-text text-bold text-white mx-2 px-2 justify-content-between" style={{borderBottom: "2px solid #555555"}}><text>Advanced Filters</text><i onClick={ this.onfilterVisible } class={ this.state.iconClass } style={{fontSize: '24px', color: '#ff5500'}}></i></div>
                {
                    this.state.showFilter && <Filter />
                }
            </div>
        );
    }
}

class Filter extends Component {
    render () {
        return (
            <element>
                <div class="col mx-auto px-auto small-text grey-text">Field Size</div>
                <div class="row mx-2 px-0 py-0 align-items-center justify-content-center">
                    <select className="col-md h-50 small-text mx-0 py-0 pl-1 pr-0 browser-default custom-select">
                        <option value="1">3</option>
                        <option value="2">10</option>
                        <option value="3">100+</option>
                        <option value="4">1000+</option>
                        <option value="5">10000+</option>
                    </select>
                    <div class="col-sm-1 grey-text mx-1 px-0 text-center">to</div>
                    <select className="col-md h-50 small-text mx-0 py-0 pl-1 pr-0 browser-default custom-select">
                        <option value="1">1000+</option>
                        <option value="2">100+</option>
                        <option value="3">1000+</option>
                        <option value="4">10000+</option>
                    </select>
                </div>
                <div class="mx-2 mt-1 px-2" style={{background: '#444444', color: '#dddddd', fontSize: '0.75rem'}}>Entered Contests</div>
            </element>
        );
    }
}