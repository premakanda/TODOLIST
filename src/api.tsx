import React from 'react';
import axios from "axios";
import {ITask} from "./types/types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "a5358ace-4ecb-440c-9225-23342cbb6a67"}
});

export const api = {
    createTask(newTaskTitle:string, todolistId:string) {
        return instance.post(`/${todolistId}/tasks`, {
            title: newTaskTitle
        });
    },

    createTodolist(title:string) {
        return instance.post("", {
            title: title
        });
    },

    updateTask(obj: ITask) {
        return instance.put(`/${obj.todoListId}/tasks/${obj.id}`, obj);
    },

    deleteTodolist(todolistId:string) {
        return instance.delete(`/${todolistId}`);
    },

    deleteTask(taskId:string, todolistId:string) {
        return instance.delete(`/${todolistId}/tasks/${taskId}`);
    },

    getTodolists() {
        return instance.get("");

    },

    getTasks(todolistId:string) {
        return instance.get(`/${todolistId}/tasks`);
    },

    updateTodolistTitle(title:string, todolistId:string) {
        return instance.put(`/${todolistId}`, {title} );
    }

}