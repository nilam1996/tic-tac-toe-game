import React from "react";
import Square from './squre';
import calculateWinner from '../components/winGame';


class Board extends React.Component {
    constructor() {
      super();
      this.state = {
        squares: Array(9).fill(null),

      
      };
    }
      handleClick(i) {
            const history = this.history.slice(0, this.state.stepNumber + 1);

        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : '0';
    
        this.setState({
          squares: squares,
          history:this.history.concat([{
            squares: squares,
          }]),
          
      
        xIsNext: !this.state.xIsNext,
      });
      }

      renderSquare(i) {
      return <Square 
      value={this.state.squares[i]}
      onClick={()=>this.handleClick(i)}/>;
    
    }


   
      history = [
        // Before first move
        {
          squares: [
            null, null, null,
            null, null, null,
            null, null, null,
          ]
        },
      
      ]
    
    render() {
        const winner = calculateWinner(this.state.squares);
        const moves =this. history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
        });
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

    //   const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      return (
        <div className="main">
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  export default Board;

 