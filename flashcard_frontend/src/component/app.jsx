import React, {Component} from "react";
import axios from "axios";
import Title from "./Title/title";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardData: [],
        };
    };
    
    componentDidMount() {
        this.getFlashcardData();
    }

    async getFlashcardData() {
        let response = await axios.get(
          "http://localhost:5000/api/collections"
        );
        console.log(response.data)
        this.setState({
          flashcardData: response.data,
        });
    }

    render() {
        if (this.state.flashcardData[0] === undefined) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                   <Title/> 
                </div>
            );
        }
    }
}

export default App;