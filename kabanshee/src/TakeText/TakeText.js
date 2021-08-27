import React from "react";
import ShowText from "../ShowText/ShowText";

class TakeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedText: [],
            enteredText: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTextSubmit = this.handleTextSubmit.bind(this);
    }
    handleTextChange(event) {
        // console.log(event.target.value, 'in handle text change')
        this.setState({ enteredText: event.target.value });
    }
    handleTextSubmit(event) {
        event.preventDefault();
        this.state.submittedText.push(this.state.enteredText)
        this.setState({ submittedText: this.state.submittedText });
        // console.log(event.target[0].value, 'find the input')
        /** have to access target at the zero index to properly get the value of the text input; needs to be specified which index because the submit button is also an input tag */
        event.target[0].value = '';
    }

    render() {
        return (
            <header className="TakeText-header">
                <form onSubmit={this.handleTextSubmit}>
                    <input type="text" placeholder="Create a task" onChange={this.handleTextChange}>
                    </input>
                    <input type="submit" value="Submit" ></input>
                </form>
                {/* <ShowText task={this.state.submittedText}/> */}
            </header>
        );
    }

};

export default TakeText;