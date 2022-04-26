import React from 'react';
import styles from "./GuesserForm.module.css";

const GuesserForm = () => {

    //get the score from the state variable in guesserview

    const handleSubmission = (e) => {
        e.preventDefault();
        // some submission function here to post to the spring db
        //submit the name and the score
        //redirect
    }

    return (
        <div>
            <form className={styles.guesserForm} onSubmit={handleSubmission}>
                <input type="text" name="name" id="name" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default GuesserForm