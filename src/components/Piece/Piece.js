import React from 'react';

import './Piece.css'


const Piece = (props) => {
    return (
        <div className={`piece ${props.className}`}>
            <p>{props.type}</p>
        </div>
    )
}

export default Piece;
