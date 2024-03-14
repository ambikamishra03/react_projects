
import { useState } from "react";
import Board from "./Board";
import "./style.css";


export default function Game() {

    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove%2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
      }

      function jumpTo(nextMove) {
        setCurrentMove(nextMove);
      }
      const moves = history.map((squares, move) => { 
        // As you iterate through history array inside the function you passed to map, the squares argument goes
        //  through each element of history, and the move argument goes through each array index: 0, 1, 2, ….
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)} style={{color:'white',fontSize:'18px',
            margin:'8px',width:'220px',borderColor:'none',outline:'none',backgroundColor:'gray',
            borderRadius:'22px'}}>{description}</button>
          </li>
        );
      });
    return (
      <div className="game">
        <div className="game-board">
         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol style={{color:'white',fontSize:'22px',margin:'10px'}}>{moves}</ol>
        </div>
      </div>
    );
  }