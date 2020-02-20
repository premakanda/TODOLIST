import React from 'react';
import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "a5358ace-4ecb-440c-9225-23342cbb6a67"}
});

export const api = {
    createTask(newTaskTitle, todolistId) {
        return instance.post(`/${todolistId}/tasks`, {
            title: newTaskTitle
        });
    },

    createTodolist(title) {
        return instance.post("", {
            title: title
        });
    },

    updateTask(obj) {
        return instance.put(`/${obj.todoListId}/tasks/${obj.id}`, obj);
    },

    deleteTodolist(todolistId) {
        return instance.delete(`/${todolistId}`);
    },

    deleteTask(taskId, todolistId) {
        return instance.delete(`/${todolistId}/tasks/${taskId}`);
    },

    getTodolists() {
        return instance.get("");

    },

    getTasks(todolistId) {
        return instance.get(`/${todolistId}/tasks`);
    },

    updateTodolistTitle(title, todolistId) {
        return instance.put(`/${todolistId}`, {title} );
    }

}