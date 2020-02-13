import React, { useState } from 'react';
import './App.css';
import './components/Table/Table';
import Table from './components/Table/Table';
import Piece from './components/Piece/Piece';
import { PIECE_TYPES, PIECE_CLASSES } from './utils/consts';
import { updateRow } from './utils/controls/controls';


function App() {
  const [game, setGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePieces, setGamePieces] = useState(() => {
    const tableElements = [[], [], [], []];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // const keyIndex = (row * 4) + col;
        tableElements[row].push(<Piece type={PIECE_TYPES[0]}/>)
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

  

  const collapseLeft = () => {
    setGamePieces((oldState) => {
      const newState = [...oldState];
      updateRow(newState, "left");
      return newState;
    })
  }

  const collapseRight = () => {
    setGamePieces((oldState) => {
      const newState = [...oldState];
      updateRow(newState, "right");
      return newState;
    })
  }


  const keyboardHandler = (event) => {
    // handle events
    console.log(event.key);
    switch (event.key) {
      case "ArrowLeft" :
        collapseLeft();
      case "ArrowRight" :
        break;
      case "ArrowUp" :
        break;
      case "ArrowDown" :
        break;
      default:
        break;
    }

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
