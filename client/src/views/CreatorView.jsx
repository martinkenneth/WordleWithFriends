import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import axios from "axios";
import Leaderboard from "../components/Leaderboard";
var CryptoJS = require("crypto-js");

const CreatorView = () => {
    // const { id, name, word } = useParams();
    const [data, setData] = useState(null);
    const { encryptedObj } = useParams();

    useEffect(() => {
        console.log(encryptedObj);

        const bytes = CryptoJS.AES.decrypt(
            decodeURIComponent(encryptedObj),
            "secret-key"
        );
        const decryptedObj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptedObj.name);
        setData({
            id: decryptedObj.id,
            name: decryptedObj.name,
            word: decryptedObj.word,
        });
        // const { id, name, word } = decryptedObject;
        console.log(decryptedObj);
    }, []);

    // const encryptObj = (data) => {
    //     let encryptedObject = CryptoJS.AES.encrypt(
    //         JSON.stringify(data),
    //         "secret-key"
    //     ).toString();
    //     //log encrypted data
    //     console.log("Encrypt Data -");
    //     console.log(encryptedObject);

    // var bytes = CryptoJS.AES.decrypt(encryptedObject, "secret-key");
    // var decryptedObject = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // console.log(decryptedObject);

    // return encryptedObject;

    return (
        <div>
            {data ? (
                <div>
                    <Header />
                    {/* <h1>{data.name}'s Dashboard</h1> */}
                    <div className="links">
                        <h3>Creator Link:</h3>
                        <a
                            href={`http://localhost:3000/creator/${encryptedObj}`}
                        >
                            Creator Link
                        </a>
                    </div>
                    <div className="links">
                        <h3>Share Link:</h3>
                        <a
                            href={`http://localhost:3000/playgame/${encryptedObj}`}
                        >
                            Share Link
                        </a>
                    </div>
                    {/* insert leader board component here */}
                    <Leaderboard name={data.name} id={data.id} />
                </div>
            ) : (
                <></>
            )}
            {/* 
            <Header />
            <h1>Hello World</h1> */}
            {/* <h1>{data.name}'s Dashboard</h1> */}
            {/* <div className="links">
                <h3>Creator Link:</h3>
                <a href="">{`http://localhost:3000/${id}/${name}=${word}`}</a>
            </div>
            <div className="links">
                <h3>Share Link:</h3>
                <a
                    href={`http://localhost:3000/${id}/${name}=${word}/guess`}
                >{`http://localhost:3000/${id}/${name}=${word}/guess`}</a>
            </div> */}
            {/* insert leader board component here */}
            {/* <Leaderboard name={data.name} id={data.id} /> */}
        </div>
    );
};

export default CreatorView;
