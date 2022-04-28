import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import axios from "axios";
import Leaderboard from "../components/Leaderboard";

const CreatorView = () => {
    const { id, name, word } = useParams();

    return (
        <div>
            <Header />
            <h1>{name}'s Dashboard</h1>
            <div className="links">
                <h3>Creator Link:</h3>
                <a href="">{`http://localhost:3000/${id}/${name}=${word}`}</a>
            </div>
            <div className="links">
                <h3>Share Link:</h3>
                <a
                    href={`http://localhost:3000/${id}/${name}=${word}/guess`}
                >{`http://localhost:3000/${id}/${name}=${word}/guess`}</a>
            </div>
            {/* insert leader board component here */}
            <Leaderboard name={name} id={id} />
        </div>
    );
};

export default CreatorView;
