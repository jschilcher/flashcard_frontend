import React from "react";
import DisplayCards from "../Cards/cards";

function FullCardDisplay(props) {
    console.log(props)
    return(
        <div className="row row-spacer">
                    <div className="col">
                        <button onClick={() => props.previousCard()}>Back</button>
                    </div>
                    <div className="col">
                        <DisplayCards card={props.cards}/>
                    </div>
                    <div className="col">
                        <button onClick={() => props.nextCard()}>Next</button>
                    </div>
                </div>
    )
}

export default FullCardDisplay;