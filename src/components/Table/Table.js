import React from 'react';

import './Table.css'

const Table = (props) => {
    const firstLine = props.pieces[0];
    const secondLine = props.pieces[1];
    const thirdLine = props.pieces[2];
    const fourthLine = props.pieces[3];

    return (
        <div className="table-main">
            <div className="table-row">
                {
                    firstLine.map((el) => el)
                }
            </div>
            <div className="table-row">
                {
                    secondLine.map((el) => el)
                }
            </div>
            <div className="table-row">
                {
                    thirdLine.map((el) => el)
                }
            </div>
            <div className="table-row">
                {
                    fourthLine.map((el) => el)
                }
            </div>
        </div>
    )
    
}


export default Table;