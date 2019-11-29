import React from 'react';

class TodoListHeader extends React.Component {
    constructor() {
        super();
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        error: false,
       title: ""
    }

    onAddTaskClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ""});
        if (newTitle.trim() === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newTitle);
        }
    }

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    onKeyPress = (e) => {
        if(e.key === "Enter") {
            this.onAddTaskClick();
        }
    }



    render = () => {
        let classForInput = this.state.error ? "error" : ""
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text"
                           onKeyPress={this.onKeyPress}
                        placeholder="New task name"
                           onChange={this.onTitleChanged}
                           className={classForInput}
                           value={this.state.title}
                         />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

