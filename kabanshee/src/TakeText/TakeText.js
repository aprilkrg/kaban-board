import React from "react";

class TakeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedText: "",
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
        this.setState({ submittedText: this.state.enteredText });
        console.log(event.target[0].value, 'find the input')
        event.target[0].value = '';
    }

    render() {
        return (
            <div className="TakeText">
                <header className="TakeText-header">
                    <form onSubmit={this.handleTextSubmit}>
                        <input type="text" placeholder={this.props.text} onChange={this.handleTextChange}>
                        </input>
                        <input type="submit" value="Submit" ></input>
                    </form>
                </header>
            </div>
        );
    }

};

export default TakeText;