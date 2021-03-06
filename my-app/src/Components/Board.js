import React from 'react';
import ReactDOM from 'react-dom'
import { stat } from 'fs';
import Square from './Square';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            squares: Array(9).fill(null)
        };
    }
 renderSquare(i){
    return <Square value={this.state.squares[i]} OnClick={()=>this.handleClick(i)} />
 }
 handleClick(i){
     const squares = this.state.squares.slice();
     squares[i]='X';
     this.setState({squares: squares})
 }
    render(){
    const status = "Next player: X";
    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}                
            </div>
            <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}                
            </div>
            <div className="board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}                
            </div>
        </div>
    )
    }
}
export default Board;