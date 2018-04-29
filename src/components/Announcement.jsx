import React, { Component } from 'react';
import './Announcement.css';

class Announcement extends Component {
    render() {
        return(
            <div className={this.props.winner ? 'visible' : 'hidden'}>
                <div>{this.props.winner}</div>
            </div>
        )
    }
    
};

export default Announcement;