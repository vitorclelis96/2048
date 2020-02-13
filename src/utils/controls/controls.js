import React from 'react';
import { PIECE_CLASSES, PIECE_TYPES } from '../consts';
import Piece from '../../components/Piece/Piece';

const GAME_COL_SIZE = 4;
const GAME_ROW_SIZE = 4;

/*
    BUG:
        When adding [8, 4, 4, x] or [4, 2, 2, x],
        instead of returning [8, 8, x, x], returns [16, x, x, x]
        
*/

export function updateRow(gamePieces, orientation) {
    switch(orientation) {
        case "left":
            for (let row = 0; row < GAME_ROW_SIZE; row++) {
                updateLeft(gamePieces[row]);
            }
            break;
        case "right":
            for (let row = 0; row < GAME_ROW_SIZE; row++) {
                updateRight(gamePieces[row]);
            }
            break;
        case "top":
            break;
        case "bottom":
            break;
        default:
            break;
    }
}

function updateLeft(row) {
    for (let i = 0; i < row.length; i++) {
      if (i === 0) {
        continue;
      }
      let justJoined = false;
      if (justJoined) {
          break;
      }
      for (let u = i; u > 0; u--) {
        if (justJoined) {
            break;
        }
        if (row[u].props.type === PIECE_TYPES[0]){
          continue;
        }
        if (row[u].props.type !== PIECE_TYPES[0]) {
          if (row[u-1].props.type === row[u].props.type) {
            const newType = PIECE_TYPES.indexOf(row[u].props.type) + 1;
            row[u-1] = <Piece type={PIECE_TYPES[newType]} className={PIECE_CLASSES[newType]} />
            row[u] = <Piece type={PIECE_TYPES[0]} />
            justJoined = true;
            continue;
          }
          if (row[u-1].props.type === PIECE_TYPES[0]) {
            row[u-1] = row[u];
            row[u] = <Piece type={PIECE_TYPES[0]} />
          }
        }
      }
    }
}

function updateRight(row) {
    for (let i = (row.length - 1); i <= 0; i--) {
      if (i === (row.length - 1)) {
        continue;
      }
      for (let u = i; u < (row.length - 1); u++) {
        if (row[u].props.type === PIECE_TYPES[0]){
          continue;
        }
        if (row[u].props.type !== PIECE_TYPES[0]) {
          if (row[u+1].props.type === row[u].props.type) {
            const newType = PIECE_TYPES.indexOf(row[u].props.type) + 1;
            row[u+1] = <Piece type={PIECE_TYPES[newType]} className={PIECE_CLASSES[newType]} />
            row[u] = <Piece type={PIECE_TYPES[0]} />
            continue;
          }
          if (row[u+1].props.type === PIECE_TYPES[0]) {
            row[u+1] = row[u];
            row[u] = <Piece type={PIECE_TYPES[0]} />
          }
        }
      }
    }
}