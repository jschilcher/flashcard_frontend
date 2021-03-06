import React, {Component} from "react";
import axios from "axios";
import Title from "./Title/title";
import CardPackage from "./CardPackage/cardPackage";
import DisplayCards from "./Cards/cards";
import FullCardDisplay from "./FullCardDisplay/fullCardDisplay";
import AddCard from "./AddCard/addCard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardData: [],
            selectedCollection: [],
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
          selectedCollection: response.data[0]
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

    
  addNewCard(card){
    this.state.selectedCollection.cards.push(card);
    this.setState({
      cardNumber: this.state.selectedCollection.cards.length - 1
    })
  }

    render() {
        console.log(this.state.selectedCollection.cards)
        if (this.state.flashcardData[0] === undefined) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                   <Title/> 
                   <CardPackage package={this.state.flashcardData}/>
                   <FullCardDisplay cards={this.state.selectedCollection.cards[this.state.cardNumber]} nextCard={() => this.nextButton()} previousCard={() => this.goBack()}/>
                   <AddCard addNewCard={this.addNewCard.bind(this)}/>
                </div>
            );
        }
    }
}

export default App;