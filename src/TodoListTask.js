import React from 'react';


const TodoListTask = (props) => {
    return (
        <div className="todoList-tasks">
            <div className="todoList-task">
                <input type="checkbox" checked={props.isDone}/>
                <span>{props.title}, priority: {props.priority}</span>
            </div>
        </div>
    );
}

export default TodoListTask;

