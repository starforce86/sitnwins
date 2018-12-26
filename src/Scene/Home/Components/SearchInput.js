import React, { Component } from 'react';
import './component.css';

export default class SearchInput extends Component {
    render () {
        return (
            <div class="row mx-2 inner-addon right-addon">
                <input className="form-control h-50 search-input pl-1 " type="text" placeholder="Search Contests" aria-label="Search" />
                <span class="input-group-addon bg-white border-left-0"><i class="icon-search"></i></span>
            </div>
        );
    }
}