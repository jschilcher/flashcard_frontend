import React, { Component } from "react";

class AddCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            front: "",
            back: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const card = {
            front: this.state.title,
            back: this.state.album,
        }
        this.props.addNewCard(card);
        this.setState({
            front: "",
            back: "",
        });
    }

    render(){
        return(
            <div>
                <hr />
                <center>
                    <h3>Make a card!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Front:</label>
                            <input type="text" name="front" value={this.state.front}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Back:</label>
                            <input type="text" name="back" value={this.state.back}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCard;