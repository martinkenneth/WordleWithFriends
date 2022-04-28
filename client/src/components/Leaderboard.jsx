import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = (props) => {
    /*
    get all guessers with a specific creator id upon render
    save them into a state variable and sort by score...?
    secondary sorter would be time
    */
    const [guessers, setGuessers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/creators/${props.id}`)
            .then((response) => {
                // console.log(response.data.products);
                console.log(response);
                setGuessers(response.data.guessers);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    /*
    extra, dont worry about this right now
    onclick function that resorts the guessers state variable via time
    secondary sorter would be number of guesses
    */

    return (
        <div>
            <h1>{props.name}'s Wordle Leaderboard</h1>
            {JSON.stringify(guessers)}
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    {/* for each guesser in guessers 
                    tr
                        td name
                        td score
                        td time
                    tr*/}

                    {guessers.map((guesser, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{guesser.id}</td>
                                <td>{guesser.name}</td>
                                <td>{guesser.attempts}/6</td>
                                {/* <td>{guesser.time}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
