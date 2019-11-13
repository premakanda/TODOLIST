import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {
     constructor() {
        super();
        this.newTaskTitleRef = React.createRef();
        // setTimeout(()=> {
        //     let newTask = {title: "BLA", isDone: true, priority: "hight"};
        //     let newTasks = [...this.state.tasks, newTask];
        //     this.setState({
        //         tasks: newTasks
        //     });
        // },2000);
     }

    state = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "HTML", isDone: true, priority: "medium"},
            {title: "JS", isDone: true, priority: "low"},
            {title: "React", isDone: true, priority: "hight"},
            {title: "Reduct", isDone: true, priority: "hight"}
        ],

        filterValue: "All"

    }

    onAddTaskClick = () => {
        let newTask = {title: this.newTaskTitleRef.current.value, isDone: false, priority: "hight"};
        this.newTaskTitleRef.current.value = "";
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name" ref={this.newTaskTitleRef}/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>

                    {/*<TodoListHeader />*/}

                    <TodoListTasks tasks={this.state.tasks}/>

                    <TodoListFooter filterValue={this.state.filterValue}/>

                </div>
            </div>
        );
    }
}

export default App;

