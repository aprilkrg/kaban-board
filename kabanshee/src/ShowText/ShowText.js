import React from "react";

class ShowText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedItems: []
        };
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleCheckBox(event) {
        const index = event.target.id[event.target.id.length-1];
        const checkedTask = this.props.tasks[index]
        
        const bool = this.state.checkedItems.includes(checkedTask) ? true : false;
        console.log(bool, '<<<<< ');
        if(bool === false) {
            this.state.checkedItems.push(checkedTask);
        }
        this.setState({ checkedItems: this.state.checkedItems })
    }
    render() {
        return (
            <>
            <header className="ShowText-header">
                <ul>{this.props.title}
                    {this.props.tasks.map( (task, index) => (
                        <li key={task + index} id={task + index}>
                            <input onClick={this.handleCheckBox} type="checkbox" id={task + index} defaultChecked={false}>
                            </input>
                            {task}
                        </li>
                    ))}
                </ul>
                {/* <ShowText title="COMPLETE:" tasks={this.state.checkedItems} /> */}
            </header>
            <header className="Completed-header">
                <ul>Complete Tasks
                    {this.state.checkedItems.map( (task, index) => (
                        <li key={task + index} id={task + index}>
                            <input disabled={true} type="checkbox" id={task + index} defaultChecked={true}>
                            </input>
                            {task}
                        </li>
                    ) )}
                </ul>
            </header>

            </>
        )
    }
}

export default ShowText;