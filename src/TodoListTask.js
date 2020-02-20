import React from 'react';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        title: this.props.task.title
    }
    activatedEditMode = () => {
        this.setState({editMode: true})
    }
    deActivatedEditMode = () => {
        this.props.changeTitle(this.props.task.id, this.state.title);
        this.setState({editMode: false});
    }
    onIsDoneChanged = (e) => {
        let status = e.currentTarget.checked ? 2 : 0;
        this.props.changeStatus(this.props.task.id, status)
    }

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value});
    }

    deleteTask =  () =>  {
        this.props.deleteTask(this.props.task.id)
    }


    render() {
        // let status = e.currentTarget.checked ? 2 : 0;
        let classesForTask = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={classesForTask}>
                <input type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged} />
                    {this.state.editMode
                        ?<input autoFocus={true}
                                value={this.state.title}
                                onBlur={this.deActivatedEditMode}
                                onChange={this.onTitleChanged}
                        />
                :<span onClick={this.activatedEditMode}> {this.state.title}, priority: {this.props.task.priority}</span>}
                <button className="buttonClose" type="button" onClick={this.deleteTask}>x</button>
            </div>
        );
    }
}

export default TodoListTask;
