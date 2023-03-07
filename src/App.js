import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function calculateWinner(squares) {
  //경우의 수 (승자)
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
export default function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [player, setPlayer] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${player ? "X" : "O"}`;
  }
  // const duce = squares.filter((e) => e !== null).length === 9 ? true : false;

  const jumpTo = (step) => {
    setStepNumber(step);
    setPlayer(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    // 원본 state 복사하기

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = player ? "X" : "O";

    // 실제 state 업데이트하기
    setHistory([...newHistory, { squares: newSquares }]);
    setPlayer(!player);

    setStepNumber(newHistory.length);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol style={{ listStyle: "none" }}>{moves}</ol>
      </div>
    </div>
  );
}
