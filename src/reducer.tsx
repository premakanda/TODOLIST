import {api} from "./api";
import { ITask, ITodolist} from "./types/types";
import {Dispatch} from "redux";

export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";
export const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const ADD_TASK = "TodoList/Reducer/ADD-TASK";
export const SET_TASKS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
export const UPDATE_TODOLIST = "TodoList/Reducer/UPDATE-TASK";

interface IInitialState {
    todolists: Array<ITodolist>
}


const initialState:IInitialState = {
    todolists: []
}

const reducer = (state:IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {

        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map((tl: ITodolist) => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: action.tasks
                        }
                    }
                    return tl
                })
            }

        case SET_TODOLISTS:
            let todolists = action.todolists.map((tl: ITodolist) => {
                return {
                    ...tl,
                    tasks: []
                }
            });

            return {
                ...state,
                todolists: todolists
            }
        case ADD_TODOLIST:
            let todolist = {
                ...action.newTodolist,
                tasks: []
            }

            return {
                ...state,
                todolists: [todolist, ...state.todolists]
            }
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter((tl: ITodolist) => tl.id !== action.todolistId)
            }
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map((tl: ITodolist) => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            }
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map((tl: ITodolist) => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                        return tl
                    }
                })
            }
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map((tl: ITodolist) => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }
    }
    console.log("reducer: ", action);
    return state;
}
interface IUpdateTaskAC  {
    type: string;
    taskId: string;
    todolistId: string;
    obj: ITask;
}

export const updateTaskAC = (taskId: string, obj: ITask, todolistId: string):IUpdateTaskAC  => {
    return {type: UPDATE_TASK, taskId, obj, todolistId};
}

interface IDeleteTodolistAC {
    type: string;
    todolistId: string;
}

export const deleteTodolistAC = (todolistId: string):IDeleteTodolistAC  => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
}

interface IDeleteTaskAC {
    type: string;
    taskId: string;
    todolistId: string;
}

export const deleteTaskAC = (taskId: string, todolistId: string):IDeleteTaskAC => {
    return {
        type: DELETE_TASK,
        taskId,
        todolistId
    };
}

interface IAddTaskAC  {
    type: string;
    newTask: string
    todolistId: string;
}

export const addTaskAC = (newTask: string, todolistId: string):IAddTaskAC => {
    return {type: ADD_TASK, newTask, todolistId};
}

interface ISetTasksAC {
    type: string;
    todolistId: string
    tasks: Array<ITask>;
}

export const setTasksAC = (tasks: Array<ITask>, todolistId: string):ISetTasksAC => {
    return {type: SET_TASKS, tasks, todolistId};
}

interface ISetTodolistsAC {
    type: string;
    todolists: Array<ITodolist>;
}

export const setTodolistsAC = (todolists: Array<ITodolist>):ISetTodolistsAC => {
    return {type: SET_TODOLISTS, todolists};
}

interface IAddTodolistAC {
    type: string;
    newTodolist: string;
}

export const addTodolistAC = (newTodolist: string):IAddTodolistAC => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    }
}

interface IUpdateTodolistTitleAC {
    type: string;
    newTodolistTitle: string;
    todolistId: string;
}

export const updateTodolistTitleAC = (newTodolistTitle: string, todolistId: string): IUpdateTodolistTitleAC => {
    return {
        type: UPDATE_TODOLIST,
        newTodolistTitle,
        todolistId
    }
}

export const getTodolistTC = () => (dispatch:Dispatch) => {
    api.getTodolists().then(res => {
        dispatch(setTodolistsAC(res.data));
    });
}

export const createTodolistTC = (newTodoList: string) => (dispatch:Dispatch) => {
    api.createTodolist(newTodoList).then(res => {
        let newTodoList = res.data.data.item;
        dispatch(addTodolistAC(newTodoList));
    })
}

export const getTasksTC = (todolistId: string) => (dispatch:Dispatch) => {
    api.getTasks(todolistId).then((res) => {
        let tasks = res.data.items;
        dispatch(setTasksAC(tasks, todolistId));
    })
}

export const addTaskTC = (newText: string, todolistId: string) => (dispatch:Dispatch) => {
    api.createTask(newText, todolistId).then((res) => {
        let newTask = res.data.data.item;
        dispatch(addTaskAC(newTask, todolistId));
    })
}

export const updateTaskTC = (taskId: string, obj: [], todolistId: string) => {

    return (dispatch: Dispatch, getState:any) => {
        getState()
            .reducer
            .todolists.find((tl: ITodolist) => tl.id === todolistId)
            .tasks.forEach((t: ITask) => {
            if (t.id === taskId) {
                debugger
                api.updateTask({...t, ...obj})
                    .then((res) => {
debugger
                        let newTask = res.data.data.item;
                        if (res.data.resultCode === 0) {
                            dispatch(updateTaskAC(newTask.id, newTask, newTask.todolistId));
                        }
                    });

            }
        })
    }
}
export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch) => {
    api.deleteTodolist(todolistId).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(deleteTodolistAC(todolistId));
        }
    })
}

export const deleteTaskTC = (taskId: string, todolistId: string) => (dispatch:Dispatch) => {
    api.deleteTask(taskId, todolistId).then((res) => {
        dispatch(deleteTaskAC(taskId, todolistId));
    })
}


export const updateTodolistTitleTC = (newTodolistTitle: string, todolistId: string) => (dispatch:Dispatch) => {
    api.updateTodolistTitle(newTodolistTitle, todolistId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(updateTodolistTitleAC(newTodolistTitle, todolistId));
            }

        })
}

export default reducer;
