import React from 'react';
import TodoListTask from './TodoListTask';


class TodoListTasks extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render = () => {
        const tasksElements = this.props.tasks.map( (t) => {
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

