import React, {Component} from "react";
import axios from "axios";
import Title from "./Title/title";
import CardPackage from "./CardPackage/cardPackage";
import DisplayCards from "./Cards/cards";
import FullCardDisplay from "./FullCardDisplay/fullCardDisplay";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardData: [],
            cardNumber: 0
        };
    };
    
    componentDidMount() {
        this.getFlashcardData();
    }

    async getFlashcardData() {
        let response = await axios.get(
          "http://localhost:5000/api/collections"
        );
        this.setState({
          flashcardData: response.data,
        });
    }

    nextButton(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.state.flashcardData.length){
            tempCardNumber = 0;
        }
        this.setState({
            cardNumber: tempCardNumber
        });
    }

    goBack(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber--;
        if(tempCardNumber < 0)
            tempCardNumber = this.state.flashcardData.length - 1;
        this.setState({
            cardNumber: tempCardNumber
        });
    }

    render() {
        if (this.state.flashcardData[0] === undefined) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                   <Title/> 
                   <CardPackage package={this.state.flashcardData}/>
                   <FullCardDisplay cards={this.state.flashcardData[this.state.cardNumber]} nextCard={() => this.nextButton()} previousCard={() => this.goBack()}/>
                </div>
            );
        }
    }
}

export default App;