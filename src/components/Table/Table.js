import React from 'react';

import './Table.css'

const Table = (props) => {
    const firstLine = [];
    const secondLine = [];
    const thirdLine = [];
    const fourthLine = [];

    for (let i = 0; i < 16; i++) {
        if (i >= 0 && i <= 3) {
            firstLine.push(props.pieces[i])
        } else if (i > 3 && i <= 7) {
            secondLine.push(props.pieces[i])
        } else if (i > 7 && i <= 11) {
            thirdLine.push(props.pieces[i])
        } else {
            fourthLine.push(props.pieces[i])
        }
    }



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