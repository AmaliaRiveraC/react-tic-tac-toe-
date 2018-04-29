import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
    
    tileClick(props, event)  {
        let index = event.target.dataset.square;
        if (!props.gameEnd) {
            if (props.gameBoard[props.loc] === ' ') {
                props.gameBoard[props.loc] = props.turn;
                props.updateBoard(props.loc, props.turn);
            }
            
        }
    }
    render() {
        return(
            <div className={'tile ' + this.props.loc} onClick={(e)=> this.tileClick(this.props, e)}>
                <p>{this.props.value}</p>
            </div>
            )
    }
    
};

export default Tile;