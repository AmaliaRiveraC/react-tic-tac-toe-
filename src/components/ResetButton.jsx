import React, { Component } from 'react';
import './ResetButton.css';

class ResetButton extends Component {
    render() {
        return(
            <button className="reset" onClick={this.props.reset}> Reset </button>
        )
    }
    
};

export default ResetButton;