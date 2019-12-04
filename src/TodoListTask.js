import React from 'react';
import PropTypes from 'prop-types';

class TodoListTask extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editMode: false
    }
    activatedEditMode = () => {
        this.setState({editMode: true})
    }
    deActivatedEditMode = () => {
        this.setState({editMode: false})
    }
    onIsDoneChanged = (e) => {
        debugger
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }


    render() {

        let classesForTask = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={classesForTask}>

                <input type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged} />
                    {this.state.editMode
                        ?<input autoFocus={true}
                                value={this.props.task.title}
                                onBlur={this.deActivatedEditMode}
                                onChange={this.onTitleChanged}
                        />
                :<span onClick={this.activatedEditMode}>{this.props.task.id}, {this.props.task.title}, priority: {this.props.task.priority}</span>}

            </div>
        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    priority: PropTypes.bool
};