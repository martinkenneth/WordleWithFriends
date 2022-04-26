import React from 'react'

const Leaderboard = () => {

    /*
    get all guessers with a specific creator id upon render
    save them into a state variable and sort by score...?
    secondary sorter would be time
    */

    /*
    extra, dont worry about this right now
    onclick function that resorts the guessers state variable via time
    secondary sorter would be number of guesses
    */

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    {/* for each guesser in guessers 
                    tr
                        td name
                        td score
                        td time
                    tr*/}
                    {/* {guessers.map((guesser) => {
                        return (
                            <tr>
                                <td>{guesser.name}</td>
                                <td>{guesser.score}</td>
                                <td>{guesser.time}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard