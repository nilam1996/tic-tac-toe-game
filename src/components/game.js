import React from "react";
import Board from './board'
class Game extends React.Component {
    constructor() {
        super();
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          stepNumber: 0,
          xIsNext: true,
        };
      }
    render() {
        const history = this.state.history;
        // const current = history[history.length - 1];
        const current = history[this.state.stepNumber];
       
        let status;
        let moves;
     
      return (
        <div className="game">
          <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          </div> <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>

        </div>
      );
    }
  }
  export default Game