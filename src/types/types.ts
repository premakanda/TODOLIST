export interface ITask {
    id: string;
    title: string;
    isDone: boolean;
    priority: string;
    todoListId: string;
}

export interface ITodolist {
    id: string;
    title: string;
    tasks: Array<ITask>;
}

export interface IObj{
   title?:  string;
   checked?: boolean;
}