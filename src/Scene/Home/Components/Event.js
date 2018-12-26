import React, { Component } from 'react';
import './component.css';

export default class Event extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            id: this.props.eventId,
            hover: false ,
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter () {
        this.setState({ hover: true });
    }

    handleMouseLeave () {
        this.setState({ hover: false });
    }

    handleClick () {
        /*const { eventId, eventClicked} = this.props;*/
        this.setState({ hover: false});
        console.log(this.props.caption);
    }

    render () {
        return (
            <div class="event effect-shine" onClick={this.handleClick.bind(this)}>
                <img src={require(`./img/events/${this.props.imgPath.toLowerCase()}.png`)} class="event-icon" alt={this.props.imgPath.toLowerCase()}></img>
                <div class="event-caption row">{this.props.caption}</div>
            </div>
        );
    }
}