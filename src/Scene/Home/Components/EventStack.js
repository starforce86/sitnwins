import React, { Component } from 'react';
import Event from './Event';
import events from './Events.js';
import './component.css';

class EventStack extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: this.props.title,
            curId: this.props.current
        }
    }

    handleEventClick (id) {
        this.setState({curId: id});
    }

    render () {
        return (
            <div className="col event-stack pl-0 pr-1 no-select" id="style-narrow">
                <ul class="list-group">
                {events.map((event, i) =>
                    <li class="list-group-item pl-1 py-0 event-row">
                        <Event 
                            key={i}
                            id = {event.eventId}
                            imgPath = {event.imgSrc}
                            caption = {event.caption}>
                        </Event>
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default EventStack;