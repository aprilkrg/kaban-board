import React from "react";

class ShowText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskItems: []
        };
    }
    render() {
        return (
            <header className="ShowText-header">
                <ul>To Do
                    {this.props.tasks.map( task => (
                        <li key={task}>
                            {task}
                        </li>
                    ))}
                </ul>
            </header>
        )
    }
}

export default ShowText;