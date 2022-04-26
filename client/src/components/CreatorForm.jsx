import React from "react";
import styles from "./CreatorForm.module.css";

const CreatorForm = () => {
    const handleSubmission = (e) => {
        e.preventDefault();
        // some submission function here to post to the spring db
        //hash name and word
    }
    return (
        <div>
            <form className={styles.creatorForm} onSubmit={handleSubmission}>
                <input type="text" name="name" id="name" />
                <input type="text" name="word" id="word" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatorForm;
