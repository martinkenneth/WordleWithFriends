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
            let currGuessDict = {};
            for (let i = 0; i < props.word.length; i++) {
                for (let j = 0; j < props.currGuess.length; j++) {
                    if (props.currGuess[j] === props.word[i]){
                        if (i === j){
                            currGuessDict[props.currGuess[j]] = "rightSpot";
                        }
                        else {
                            currGuessDict[props.currGuess[j]] = "wrongSpot";
                        }
                    }
                    else if (props.currGuess[j] !== props.word[i] && i===j) {
                        currGuessDict[props.currGuess[j]] = "incorrect";
                    }
                }
            }
            props.setPrevGuesses([...props.prevGuesses, currGuessDict]);

            //for loop through currGuess change letter status in dictionary if needed;

            props.setCurrGuess([]);
        }

        //add in case where the submitted current guess is the correct word
        //  record the length of prev guesses (score) -> save as a state value
        if (props.prevGuesses.length > 0){

            let lastGuess = "";
            console.log(props.prevGuesses[props.prevGuesses.length-1]);
            for (const letter in props.prevGuesses[props.prevGuesses.length-1]){
                lastGuess += letter;
            }
            if (lastGuess === props.word){
                props.setScore(props.prevGuesses.length);
            }
        }
        
        if (letter !== "ENTER" && letter !== "DELETE" && props.currGuess.length < 5){
            props.setCurrGuess([...props.currGuess, letter]);
        }
        else if (letter === "DELETE"){
            props.currGuess.pop();
            props.setCurrGuess([...props.currGuess]);
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
    );
}

export default Keyboard;