import React from 'react';
import Letter from './Letter';

const Keyboard = (props) => {

    const clickKeyboard = (letter) => {
        /*
        if the value of the click key is enter and the currGuess.length == 5
        add currGuess to prevGuesses
        clear currGuess
        */
        if (letter.equals("ENTER") && props.currGuess.length === 5){
            let updateGuesses = props.prevGuesses.add(props.currGuess);
            props.setPrevGuesses = updateGuesses;
            props.setCurrGuess("");
        }
    }

    // 2d array for letters
    // const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','ENTER','DELETE'];
    const letters = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']];
    return (
        <div>
            <h1>Something!</h1>
            {/* for every letter output a buttonComponent with value as letter */}
            {letters.map((row) => {
                return (
                    <div className="keyboardRow">
                        {row.map((letter) => {
                            return (
                                <Letter letter={letter} onClick={(e, letter) => clickKeyboard(letter)} />
                            );
                        })}
                    </div>
                )})}
        </div>
    )
}

export default Keyboard;