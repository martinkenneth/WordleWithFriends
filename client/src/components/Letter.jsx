import React from 'react';

const Letter = (props) => {
    return (
        <div>
            <button onClick={(e) => {props.onClickFunction(props.letter)}}>{props.letter}</button>
        </div>
    )
}

export default Letter;