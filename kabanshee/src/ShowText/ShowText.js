import React from "react";
import TakeText from "../TakeText/TakeText";

class ShowText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskItems: []
        };
    }
    handleTaskSubmit(event) {
        console.log(this.state, 'state <<');
        console.log(event, 'event')
    }
    render() {
        return (
            <header className="ShowText-header">
                <li>
                    {this.props.task}
                    {/* {this.props.submittedText} */}
                </li>
            </header>
        )
    }
}

export default ShowText;