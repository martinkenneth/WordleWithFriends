import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Keyboard from '../components/Keyboard';
import styles from "./GuesserView.modules.css";

const GuesserView = () => {
    // prevGuesses state variable -> dont have to pass
    // currGuess state variable -> pass variable and setter as props to keyboard

    const [prevGuesses, setPrevGuesses] = useState([]);
    const [currGuess, setCurrGuess] = useState([]);

    const [score, setScore] = useState(7);
    const [word, setWord] = useState("CODER");

    return (
        <div>
            <Header />
            {/* insert creator's name below this will come from the link*/}
            <h2>You have 6 tries to guess _____'s word</h2>
            <h3>Score: {score}</h3>
            <h3>Word to Guess: {word}</h3>
            <h3>Previous Guesses: {prevGuesses.map((word) => word + " ")}</h3>
            <h3>Current Guess: {currGuess.map((letter) => letter)}</h3>
            
            <table>
                <tbody>
                    {/* use a for loop to spit out the rows
                    for i=0; i < guesses.length, i++
                    print out guessed words in boxes

                    have some way to continuously show the current guess

                    for i=0; i < 5-guesses.length, i++ 
                    print blank boxes
                    can you do double mapping to get the word from the prevGuesses array
                    and then get each letter from the word? */}
                    {/* {prevGuesses.map((word, i) => {
                        return (
                            <tr className="wordRow" key={i}>
                                {word.map((letter, idx) => {
                                    return (
                                        prevGuesses[word][letter] === "incorrect"
                                            ? <td className={styles.incorrect} key={idx}>{letter}</td>
                                            : prevGuesses[word][letter] === "rightSpot"
                                                ? <td className={styles.rightSpot} key={idx}>{letter}</td>
                                                : <td className={styles.wrongSpot} key={idx}>{letter}</td>
                                    );
                                })}
                            </tr>
                        )
                    })} */}
                    <tr>
                        {currGuess.map((letter, idx) => {
                            return (
                                <td className={styles.currGuessLetter} key={idx}>{letter}</td>
                            );
                        })}
                    </tr>
                    {/* how do we output empty boxes...
                    {() => {
                        let emptyBoxes =
                            (for i = 0; i < 5 - prevGuesses.length; i++) {
                                emptyBoxes.push(<div className=""></div>)
                            }
                        return emptyBoxes;
                    }} */}
                </tbody>
            </table>
            {/* insert keyboard component here */}
            <Keyboard setCurrGuess={setCurrGuess} setPrevGuesses={setPrevGuesses} prevGuesses={prevGuesses} currGuess={currGuess} score={score} setScore={setScore} word={word} />

            {/* ternary to check if the word was guessed (use Score state if score < 7) display modal*/}
        </div>
    )
}

export default GuesserView;