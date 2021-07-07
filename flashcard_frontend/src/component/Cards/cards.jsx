import React from "react";
import "./cards.css";

function DisplayCards(props){
    console.log(props)
    return (
        <div className="card">
            <div className="front">
                <h1 className="title" onClick={props.card.back}>{props.card.front}</h1>
            </div>
        </div> 
    );
}

export default DisplayCards;