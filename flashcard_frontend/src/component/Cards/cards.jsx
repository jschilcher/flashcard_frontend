import React from "react";
import "./cards.css";

function DisplayCards(props){
    return (
        <div className="card">
            <div className="front">
                <h1 className="title">{props.card.title}</h1>
            </div>
        </div>
    );
}

export default DisplayCards;