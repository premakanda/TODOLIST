import React from 'react';
import TodoListTask from './TodoListTask';
import {ITask} from "./types/types";

interface IProps {
    tasks: ITask[];
    changeTitle: (id: string, title: string) => void;
    changeStatus: (id: string, status: number) => void;
    deleteTask: (id: string) => void;
}

class TodoListTasks extends React.Component <IProps> {


    render = () => {
        const tasksElements = this.props.tasks.map((t) => {
            return <TodoListTask
                task={t}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
                deleteTask={this.props.deleteTask}
                key={t.id}
            />
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

