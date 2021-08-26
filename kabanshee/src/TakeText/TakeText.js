import React from "react";
  
class TakeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedText: "",
            enteredText: ""
        };
    }
    handleTextChange(event) {
        this.setState({ enteredText: event.target.value});
    }

    render() {
        return (
            <div className="TakeText">
              <header className="TakeText-header">
                <input type="text" placeholder={this.props.text}>
                </input>
              </header>
            </div>
          );
    }


};

export default TakeText;