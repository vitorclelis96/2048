import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Table/Table';
import Table from './components/Table/Table';
import Piece from './components/Piece/Piece';


// Must update with a object with PIECENAME and PIECECLASS
const PIECE_TYPES = ["", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048"];

const PIECE_CLASSES = [null, "two", "four", "eight", "sixteen", "thirtytwo", "sixtyfour", "twohundred", "fivehundred", "thousand", "twothousand"]

function App() {
  const [game, setGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePieces, setGamePieces] = useState(() => {
    const tableElements = [[], [], [], []];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const keyIndex = (row * 4) + col;
        tableElements[row].push(<Piece type={PIECE_TYPES[0]} key={keyIndex} />)
      }
    }
    return tableElements;
  });

  const tableIsFull = () => {
    // FUNCTION IS USELESS FOR NOW, MUST REPAIR IN FUTURE
    for (let row of gamePieces) {
      for (const el of row) {
        if (el.props.type === "") {
          return false;
        }
      }
    }
    return true;
  }

  const keyboardHandler = (event) => {
    // handle events

    generatePiece();
  }

  const beginGameHandler = () => {
    setGame(true);
    generatePiece();
  }

  const generatePiece = () => {
    if (tableIsFull()) {
      setGameOver(true);
      return;
    }
    while (true) {
      const rowIndex = Math.floor(Math.random() * 4);
      const colIndex = Math.floor(Math.random() * 4);
      if (gamePieceIsEmpty(gamePieces[rowIndex][colIndex])) {
        setGamePieces((oldState) => {
          const newState = [...oldState];
          newState[rowIndex][colIndex] = <Piece type={PIECE_TYPES[1]} className={PIECE_CLASSES[1]}/>
          return newState;
        });
        break;
      }
    }
  }

  const gamePieceIsEmpty = (gamePiece) => {
    if (gamePiece.props.type === "") {
      return true;
    }
    return false;
  }

  if (!game) {
    return (
      <button onClick={beginGameHandler}>Begin Game!</button>
    )
  }


  return (
    <React.Fragment>
      {
        gameOver && <h1> YOU DONE</h1>
      }
      <div onKeyDown={keyboardHandler} tabIndex="0">
        <Table pieces={gamePieces}/>
      </div>
    </React.Fragment>

    
  );
}

export default App;
