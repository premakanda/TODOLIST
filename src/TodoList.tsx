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
import {ITask, ITodolist} from "./types/types";

interface IState {
    tasks: Array<ITask>;
    filterValue: string;

}

// changeStatus: (taskId:string, status:number) => void;
interface IMapDispatchProps {
    getTasksTC: (id: string) => void;
    addTaskTC: (newText: string, todolistId: string) => void;
    updateTaskTC: (taskId: string, obj: any, id: string) => void;
    deleteTodolistTC: (id:string) => void;
    deleteTaskTC: (taskId:string, id: string) => void;
    updateTodolistTitleTC: (newTodolistTitle:string, id: string) => void;
}

interface IProps {
    id: string;
    title: string;
    tasks: ITask[]
}


class TodoList extends React.Component <IProps & IMapDispatchProps, IState> {


    state: IState = {
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
        this.props.getTasksTC(this.props.id);
    }

    addTask = (newText:string) => {
        this.props.addTaskTC(newText, this.props.id);

    }

    changeFilter = (newFilterValue:string) => {
        this.setState( {
            filterValue: newFilterValue
        }, () => { this.saveState(); });
    }

    changeTask = (taskId: string, obj: any) => {
        this.props.updateTaskTC(taskId, obj, this.props.id);
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
        this.props.deleteTodolistTC(this.props.id);
    }

    deleteTask = (taskId:string) => {
        this.props.deleteTaskTC(taskId, this.props.id);
    }

    changeStatus = (taskId:string, status:number) => {
        this.changeTask(taskId, {status: status})
    }

    changeTitle = (taskId:string, newTitle:string) => {
        this.changeTask(taskId, newTitle)
    }

    updateTodoTitle = (newTodolistTitle:string) => {
        this.props.updateTodolistTitleTC(newTodolistTitle, this.props.id);
    }

    render = () => {
        let {tasks = []} = this.props;
        const getFiltredTasks = (tasks: ITask[], filter: string) => {
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

// const mapDispatchToprops = (dispatch: Dispatch): IMapDispatchProps => {
//     return {
//         addTask: (newText, todolistId) => {
//             const thunk = addTaskTC(newText, todolistId);
//             dispatch(thunk);
//         },
//
//         getTasks: (todolistId: string) => {
//             const thunk = getTasksTC(todolistId);
//             dispatch(thunk);
//         },
//
//         updateTask: (taskId, obj, todolistId) => {
//              const thunk = updateTaskTC(taskId, obj, todolistId);
//             dispatch(thunk);
//         },
//
//         deleteTodolist: (todolistId) => {
//              const thunk  = deleteTodolistTC(todolistId);
//             dispatch(thunk);
//         },
//         deleteTask: (taskId, todolistId) => {
//             const thunk = deleteTaskTC(taskId, todolistId);
//            dispatch(thunk);
//        },
//         updateTodolistTitle: (newTodolistTitle, todolistId) => {
//             const thunk = updateTodolistTitleTC(newTodolistTitle, todolistId);
//             dispatch(thunk);
//         },
//         createTask: (newText, todolistId) => {
//             const thunk = addTaskTC(newText, todolistId);
//             dispatch(thunk);
//         }
//     }
// }

const ConnectedTodolist = connect(null,  {addTaskTC, getTasksTC, updateTaskTC, deleteTodolistTC, deleteTaskTC, updateTodolistTitleTC})(TodoList);
export default ConnectedTodolist;

