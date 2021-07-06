import React, {Component} from "react";
import axios from "axios";
import Title from "./Title/title";
import CardPackage from "./CardPackage/cardPackage";

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

    nextbutton(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.flashcardData.cards.length){
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
            tempCardNumber = this.flashcardData.cards.length - 1;
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
                </div>
            );
        }
    }
}

export default App;