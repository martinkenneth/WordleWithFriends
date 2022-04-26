import React, {useState} from 'react';
import Header from '../components/Header';
import Keyboard from '../components/Keyboard';

const GuesserView = () => {
    // prevGuesses state variable -> dont have to pass
    // currGuess state variable -> pass variable and setter as props to keyboard
    
    const [prevGuesses, setPreGuesses] = useState([]);
    const [currGuess, setCurrGuess] = useState("");

    return (
        <div>
            <Header/>
            {/* insert creator's name below */}
            <h2>You have 6 tries to guess _____'s word</h2>
            <table>
                <tbody>
                    {/* use a for loop to spit out the rows
                    for i=0; i < guesses.length, i++
                    print out guessed words in boxes

                    have some way to continuously show the current guess

                    for i=0; i < 5-guesses.length, i++ 
                    print blank boxes*/}
                    {/* can you do double mapping to get the word from the prevGuesses array
                    and then get each letter from the word? */}
                    {prevGuesses.map((word) => word).map((letter, idx) => {
                        return (
                            //is the letter in the word
                            //  if it isnt then keep it black
                            //  if it is then run another ternary to check if its in the right spot
                            //      if its in the right spot then make it green
                            //      if not then make it yellow
                            <div className={letter.status} key={idx}>{letter}</div>
                        );
                    })}
                    {currGuess.map((letter, idx) => {
                        return (
                            <div className="letterBox" key={idx}>{letter}</div>
                        );
                    })}
                    {/* how do we output empty boxes... */}
                </tbody>
            </table>
            {/* insert keyboard component here */}
            <Keyboard setCurrGuess={setCurrGuess} setPreGuesses={setPreGuesses} prevGuesses={prevGuesses} currGuess={currGuess}/>
        </div>
    )
}

export default GuesserView;