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
        // console.log(event.target.id[event.target.id.length-1], 'event id')
        // console.log(index, 'index of checked item')
        // console.log(this.state.checkedItems, 'checked items')
        // console.log(this.props, 'props <<<')
        // console.log(this.props.tasks, 'all tasks <<')
        // console.log(this.props.tasks[index], '1 task <<')

        const index = event.target.id[event.target.id.length-1];
        const checkedTask = this.props.tasks[index]
        this.state.checkedItems.push(checkedTask)
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