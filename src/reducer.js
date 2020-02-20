import {api} from "./api";

export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";
export const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const ADD_TASK = "TodoList/Reducer/ADD-TASK";
export const SET_TASKS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
export const UPDATE_TODOLIST = "TodoList/Reducer/UPDATE-TASK";

const initialState = {
    todolists: [
        /* {
             "id": 0, "title": "every day",
             tasks: [
                 {"title": "css11", "isDone": false, "priority": "low", "id": 0},
                 {"title": "js", "isDone": false, "priority": "low", "id": 1},
                 {"title": "react", "isDone": false, "priority": "low", "id": 2},
                 {"title": "sasasa", "isDone": false, "priority": "low", "id": 3},
                 {"title": "yoaa", "isDone": false, "priority": "low", "id": 4},
                 {"title": "sddsdsds", "isDone": false, "priority": "low", "id": 5}]
         },
         {"id": 1, "title": "tomorrow", tasks: []},
         {"id": 2, "title": "weewwe", tasks: []},
         {"id": 3, "title": "dddd", tasks: []}*/
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
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
            let todolists = action.todolists.map(tl => {
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
                todolists: state.todolists.filter(tl => tl.id != action.todolistId)
            }
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id != action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            }
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
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
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id != action.taskId) {
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

export const updateTaskAC = (taskId, obj, todolistId) => {
    return {type: UPDATE_TASK, taskId, obj, todolistId};
}
export const deleteTodolistAC = (todolistId) => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
}
export const deleteTaskAC = (taskId, todolistId) => {
    return {
        type: DELETE_TASK,
        taskId,
        todolistId
    };
}
export const addTaskAC = (newTask, todolistId) => {
    return {type: ADD_TASK, newTask, todolistId};
}
export const setTasksAC = (tasks, todolistId) => {
    return {type: SET_TASKS, tasks, todolistId};
}

export const setTodolistsAC = (todolists) => {
    return {type: SET_TODOLISTS, todolists};
}
export const addTodolistAC = (newTodolist) => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    }
}

export const updateTodolistTitleAC = (newTodolistTitle, todolistId) => {
    return {
        type: UPDATE_TODOLIST,
        newTodolistTitle,
        todolistId
    }
}

export const getTodolistTC = () => (dispatch, getState) => {
    api.getTodolists().then(res => {
        dispatch(setTodolistsAC(res.data));
    });
}

export const createTodolistTC = (newTodoList) => (dispatch, getState) => {
    api.createTodolist(newTodoList).then(res => {
        let newTodoList = res.data.data.item;
        dispatch(addTodolistAC(newTodoList));
    })
}

export const getTasksTC = (todolistId) => (dispatch, getState) => {
    api.getTasks(todolistId).then((res) => {
        let tasks = res.data.items;
        dispatch(setTasksAC(tasks, todolistId));
    })
}

export const addTaskTC = (newText, todolistId) => (dispatch, getState) => {
    api.createTask(newText, todolistId).then((res) => {
        let newTask = res.data.data.item;
        dispatch(addTaskAC(newTask, todolistId));
    })
}

export const updateTaskTC = (taskId, obj, todolistId) => {

    return (dispatch, getState) => {
        getState()
            .todolists.find(tl => tl.id === todolistId)
            .tasks.forEach(t => {
            if (t.id === taskId) {
                api.updateTask({...t, ...obj})
                    .then((res) => {
                        let newTask = res.data.data.item;
                        if (res.data.resultCode === 0) {
                            dispatch(updateTaskAC(newTask));
                        }
                    });

            }
        })
    }
}
export const deleteTodolistTC = (todolistId) => (dispatch, getState) => {
    api.deleteTodolist(todolistId).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(deleteTodolistAC(todolistId));
        }
    })
}

export const deleteTaskTC = (taskId, todolistId) => (dispatch, getState) => {
    api.deleteTask(taskId, todolistId).then((res) => {
        dispatch(deleteTaskAC(taskId, todolistId));
    })
}


export const updateTodolistTitleTC = (newTodolistTitle, todolistId) => (dispatch, getState) => {
    api.updateTodolistTitle(newTodolistTitle, todolistId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(updateTodolistTitleAC(newTodolistTitle, todolistId));
            }

        })
}

export default reducer;
