import React from 'react';
import styles from "./GuesserForm.module.css";

const GuesserForm = () => {
    const handleSubmission = (e) => {
        e.preventDefault();
        // some submission function here to post to the spring db
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