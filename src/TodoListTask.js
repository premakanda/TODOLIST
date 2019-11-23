import React from 'react';
import PropTypes from 'prop-types';

const TodoListTask = (props) => {
    let onIsDoneChanged = (e) => {
        props.changeStatus(props.task, e.currentTarget.checked)
    }
    return (
        <div className="todoList-task">
            <input type="checkbox"
                checked={props.task.isDone}
                onChange={onIsDoneChanged} />
            <span>{props.task.title}, priority: {props.task.priority}</span>
        </div>
    );
}

export default TodoListTask;

TodoListTask.propTypes = {
    priority: PropTypes.bool
};