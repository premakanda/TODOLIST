import React from 'react';
import PropTypes from 'prop-types';

const TodoListTask = (props) => {
    let onIsDoneChanged = (e) => {
        props.changeStatus(props.task, e.currentTarget.checked)
    }

    let classesForTask = props.task.isDone ? "todoList-task done" : "todoList-task"
    return (
        <div className={classesForTask}>
            <label>
            <input type="checkbox"
                checked={props.task.isDone}
                onChange={onIsDoneChanged} />
            <span>{props.task.title}, priority: {props.task.priority}</span>
            </label>
        </div>
    );
}

export default TodoListTask;

TodoListTask.propTypes = {
    priority: PropTypes.bool
};