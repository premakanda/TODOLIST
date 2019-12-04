import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
// import { thisExpression } from '@babel/types';

class App extends React.Component {
    nextTaskId = 0;
    state = {
        tasks: [
            /*{id: 0, title: "CSS", isDone: true, priority: "low" },
            {id: 1, title: "HTML", isDone: true, priority: "medium" },
            {id: 2, title: "JS", isDone: true, priority: "low" },
            {id: 3, title: "Redux", isDone: false, priority: "high" },*/

        ],
        filterValue: "All"
    }

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        debugger
        let steteAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', steteAsString);
    }

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All"
        }
        let steteAsString  = localStorage.getItem('our-state');
        if(steteAsString !=null) {
            state = JSON.parse(steteAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach((task) => {
                if(task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1
                }
            })
        });
    }

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "high"
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {this.saveState();});
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeStatus = (taskId, isDone) => {
        debugger
        this.changeTask(taskId, {isDone: isDone})

    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    }


    changeTask = (taskId, obj) => {
        debugger
        let newTasks = this.state.tasks.map(t => {
            if(t.id === taskId){
                return {...t, ...obj}
            } else {
                return t;
            }
        });
        this.setState({
            tasks: newTasks
        }, ()=> {
            this.saveState()
        })
    }


    render = () => {
        const getFiltredTasks = (tasks, filter) => {
            return tasks.filter(t => {
                switch (filter) {
                    case 'All': return true;
                    case 'Completed': return t.isDone;
                    case 'Active': return !t.isDone;
                }
            })
        };
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks={getFiltredTasks(this.state.tasks, this.state.filterValue)}
                        changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                    />
                    <TodoListFooter filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />

                </div>
            </div>
        );
    }
}

export default App;

