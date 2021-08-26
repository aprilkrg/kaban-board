import React from "react";
  
class TakeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedText: "",
            enteredText: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(event) {
        console.log(event.target.value, 'in handle text change')
        console.log(this.state, 'this')
        this.setState({ enteredText: event.target.value});
    }

    render() {
        return (
            <div className="TakeText">
              <header className="TakeText-header">
                <input type="text" placeholder={this.props.text} onChange={this.handleTextChange}>
                </input>
                <input type="submit" value="Submit"></input>
              </header>
            </div>
          );
    }


};

export default TakeText;