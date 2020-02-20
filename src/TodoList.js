import React from 'react';
import './App.css';
import AddNewItemForm from './AddNewItemForm';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import TodoListTitle from './TodoListTitle';
import {connect} from "react-redux";
import {
    getTasksTC,
    addTaskTC,
    updateTaskTC,
    deleteTodolistTC,
    deleteTaskTC,
    updateTodolistTitleTC
} from "./reducer";


class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        tasks: [],
        filterValue: "All"
    };

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    }

    restoreState = () => {
        this.props.getTasks(this.props.id);
    }

    addTask = (newText) => {
        this.props.createTask(newText, this.props.id);

    }

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        }, () => { this.saveState(); });
    }

    changeTask = (taskId, obj) => {
        this.props.updateTask(taskId, obj, this.props.id);
        // this.props.tasks.forEach(t => {
        //     if( t.id === taskId){
        //         api.updateTask(this.props.id, taskId, {...t, ...obj}).then((res) => {
        //             this.props.updateTask(taskId, obj, this.props.id);
        //         });
        //
        //     }
        // })

    }

    deleteTodolist = () => {
        this.props.deleteTodolist(this.props.id);
    }

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId, this.props.id);
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    }

    updateTodoTitle = (newTodolistTitle) => {
        this.props.updateTodolistTitle(newTodolistTitle, this.props.id);
    }

    render = () => {
        let {tasks = []} = this.props;
        const getFiltredTasks = (task, filter) => {
            return tasks.filter(t => {
                switch (filter) {
                    case 'All': return true;
                    case 'Completed': return t.isDone;
                    case 'Active': return !t.isDone;
                    default: return true
                }
            })
        };

        return (
            <div className="App-wrapper">
                <div className="todoList">
                    <div className="todoList-header">
                        <TodoListTitle title={this.props.title} deleteTodolist={this.deleteTodolist} updateTodoTitle={this.updateTodoTitle}/>
                        <AddNewItemForm addItem={this.addTask} deleteTask={this.deleteTask}/>
                    </div>
                    <TodoListTasks tasks={getFiltredTasks(this.props.tasks, this.state.filterValue)}
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTask}
                    />
                    <TodoListFooter filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addTask: (newText, todolistId) => {
            const thunk = addTaskTC(newText, todolistId);
            dispatch(thunk);
        },

        getTasks: (todolistId) => {
            const thunk = getTasksTC(todolistId);
            dispatch(thunk);
        },

        updateTask: (taskId, obj, todolistId) => {
             const thunk = updateTaskTC(taskId, obj, todolistId);
            dispatch(thunk);
        },

        deleteTodolist: (todolistId) => {
             const thunk  = deleteTodolistTC(todolistId);
            dispatch(thunk);
        },
        deleteTask: (taskId, todolistId) => {
            const thunk = deleteTaskTC(taskId, todolistId);
           dispatch(thunk);
       },
        updateTodolistTitle: (newTodolistTitle, todolistId) => {
            const thunk = updateTodolistTitleTC(newTodolistTitle, todolistId);
            dispatch(thunk);
        },
        createTask: (newText, todolistId) => {
            const thunk = addTaskTC(newText, todolistId);
            dispatch(thunk);
        }
    }
}

const ConnectedTodolist = connect(null,  mapDispatchToprops)(TodoList);
export default ConnectedTodolist;

