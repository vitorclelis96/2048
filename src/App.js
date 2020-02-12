import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Table/Table';
import Table from './components/Table/Table';
import Piece from './components/Piece/Piece';


const PIECE_TYPES = ["", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048"];

function App() {
  const [game, setGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePieces, setGamePieces] = useState(() => {
    const tableElements = []
    for (let i = 0; i < 16; i++) {
        tableElements.push(<Piece type="" key={i} />)
    }
    return tableElements;
  })

  const tableIsFull = () => {
    // FUNCTION IS USELESS NOW, MUST REPAIR IN FUTURE
    for (const el of gamePieces) {
      if (el.props.type === "") {
        return false;
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
      const index = Math.floor(Math.random() * 16);
      if (gamePieceIsEmpty(gamePieces[index])) {
        setGamePieces((oldState) => {
          const newState = [...oldState];
          newState[index] = <Piece type={PIECE_TYPES[1]} className="two"/>
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
