import React, {ChangeEvent} from 'react';
import {ITask} from "./types/types";

interface IProps {
    task: ITask;
    changeTitle: (id: string, title: string) => void;
    changeStatus: (id: string, status: number) => void;
    deleteTask: (id: string) => void;
}

interface IState {
    editMode: boolean;
    title: string;
}

class TodoListTask extends React.Component <IProps, IState> {

    state: IState = {
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
    onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>) => {
        let status = e.currentTarget.checked ? 2 : 0;
        this.props.changeStatus(this.props.task.id, status)
    }

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
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
