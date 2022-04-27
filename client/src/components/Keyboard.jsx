import React, {useState} from 'react';
import Letter from './Letter';

const Keyboard = (props) => {
    
    const [letterDictionary, setLetterDictionary] = useState({});
    
    const letterVals = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']];


    //might have to make temp dictionary then setLetterDictionary(tempDictionary);
    for (let i = 0; i < letterVals.length; i++){
        for (let j = 0; j < letterVals[i].length; j++){
            if (letterVals[i][j] === "ENTER"){
                letterDictionary[letterVals[i][j]] = "enter";
            }
            else if (letterVals[i][j] === "DELETE"){
                letterDictionary[letterVals[i][j]] = "delete";
            }
            else {
                letterDictionary[letterVals[i][j]] = "default";
            }
        }
    }


    const clickKeyboard = (letter) => {
        /*
        if the value of the click key is enter and the currGuess.length == 5
        add currGuess to prevGuesses
        clear currGuess
        */
        if (letter === "ENTER" && props.currGuess.length === 5){
            let updateGuesses = props.prevGuesses;
            updateGuesses.push(props.currGuess);
            props.setPrevGuesses(updateGuesses);

            //for loop through currGuess change letter status in dictionary if needed;

            props.setCurrGuess("");
        }

        //add in case where the submitted current guess is the correct word
        //  record the length of prev guesses (score) -> save as a state value
        if (props.prevGuesses[props.prevGuesses.length-1] === props.word){
            props.setScore(props.prevGuesses.length);
        }
        
        if (letter !== "ENTER" && letter !== "DELETE" && props.currGuess.length < 5){
            let tempGuess = props.currGuess;
            tempGuess += letter;
            props.setCurrGuess(tempGuess);
        }
        else if (letter === "DELETE"){
            let tempGuess = props.currGuess.slice(0,-1);
            props.setCurrGuess(tempGuess);
        }
    }

    // 2d array for letters
    // const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','ENTER','DELETE'];
    /*
    for loop to instantiate all letters
    push into an array
    end up with an array of letter objects
    save letter array into state variable

    */

    return (
        <div>
            {/* for every letter output a buttonComponent with value as letter */}
            {letterVals.map((row, i) => {
                return (
                    <div className="keyboardRow" style={{display: "flex"}} key={i}>
                        {row.map((letter, idx) => {
                            const status = letterDictionary[letter];
                            return (
                                <Letter className={"styles." + status} onClickFunction={clickKeyboard} letter={letter} key={idx}/>
                            );
                        })}
                    </div>
                )})}
        </div>
    )
}

export default Keyboard;