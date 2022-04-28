import React, { useState, useEffect } from "react";
import styles from "./CreatorForm.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initForm = {
    name: "",
    word: "",
};

const initErrors = {
    nameValid: true,
    wordValid: true,
    nameMsg: "Enter your name.",
    wordMsg: "Enter a valid 5 letter word.",
};

const CreatorForm = () => {
    const refreshPage = () => {
        window.location.reload(false);
    };

    /*=========================================================================
        React Hooks
    =========================================================================*/
    const [form, setForm] = useState(initForm);
    const [errors, setErrors] = useState(initErrors);
    const [APIResp, setAPIResp] = useState(false);
    // We can pass creator obj as a state or just their ID
    // const [creator, setCreator] = useState();
    const [creatorId, setCreatorId] = useState(null);
    const history = useHistory();

    // useEffect(() => {
    //     console.log("UseEffect Triggered");
    //     // history.push(`/${creatorId}${form.name}=${form.word}`);
    // }, [creatorId]);

    /*=========================================================================
        Handle API Request with AXIOS
    =========================================================================*/
    const postAPI = () => {
        axios
            .post(`http://localhost:8080/api/creators`, null, {
                params: {
                    name: form.name,
                    word: form.word,
                },
            })
            .then((response) => {
                console.log("Creator ID:", response.data.id);
                console.log(response);
                // setCreatorId(response.data.id);
                // history.push("/guesserView");
                history.push(`/${response.data.id}/${form.name}=${form.word}`);
                refreshPage();
                // history.goBack();
                // setForm(response.data);
            })
            .catch((err) => {
                console.log("ERROR", err);
            });
    };

    const callWordAPI = () => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${form.word}`)
            .then((response) => {
                // console.log(response.data.products);
                console.log(response);
                // history.push(`/guesserView`);
                setAPIResp(true);
                postAPI();
                // Maybe next axios post within here?
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const validateForm = () => {
    //     let validNameFlag = true,
    //         validWordFlag = true;
    //     // Name Valid?
    //     if (!form.name) {
    //         validNameFlag = false;
    //     }
    //     if (!form.word || form.word.length != 5) {
    //         validWordFlag = false;
    //     }
    //     setErrors({
    //         ...errors,
    //         nameValid: validNameFlag,
    //         wordValid: validWordFlag,
    //     });
    //     // Word == 5?
    //     // is word a valid word in dictionary?
    //     if (validNameFlag && validWordFlag) {
    //         console.log("Dictionary API Call:", callWordAPI());
    //         return true;
    //     }

    //     return false;
    // };

    // === WORKING ==========================================
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:8080/api`)
    //         .then((response) => {
    //             // console.log(response.data.products);
    //             console.log(response);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    /*=========================================================================
        Form Handlers
    =========================================================================*/
    const handleSubmission = (e) => {
        e.preventDefault();
        // some submission function here to post to the spring db
        //hash name and word
        //redirect to creatorView page... route to redirect to will be in app.js\
        let validNameFlag = true,
            validWordFlag = true;
        // Name Valid?
        if (!form.name) {
            validNameFlag = false;
        }
        if (!form.word || form.word.length != 5) {
            validWordFlag = false;
        }
        setErrors({
            ...errors,
            nameValid: validNameFlag,
            wordValid: validWordFlag,
        });
        // Word == 5?
        // is word a valid word in dictionary?
        if (validNameFlag && validWordFlag) {
            // history.push("/guesserView");
            callWordAPI();
        }
        // Use history maybe within a useEffect or within the .then?
        // since creatorId STATE will be one iteration behind
        // console.log("Within Handle Submit:", creatorId);
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        history.push("/guesserView");
        refreshPage();
        // this.forceUpdate();
        // history.goBack();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            {JSON.stringify(form)};
            <form
                className={styles.creatorForm}
                onSubmit={handleSubmission}
                autoComplete="off"
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                {errors.nameValid ? <></> : <p>{errors.nameMsg}</p>}
                <input
                    type="text"
                    name="word"
                    value={form.word}
                    onChange={handleChange}
                />
                {errors.wordValid ? <></> : <p>{errors.wordMsg}</p>}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatorForm;
