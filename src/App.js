import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
// import { thisExpression } from '@babel/types';

class App extends React.Component {
    
    state = {
        tasks: [
            { title: "CSS", isDone: true, priority: "low" },
            { title: "HTML", isDone: true, priority: "medium" },
            { title: "JS", isDone: true, priority: "low" },
            { title: "Redux", isDone: false, priority: "high" },

        ],
        filterValue: "All"
    }

    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "high"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if(t != task){
                return t
            } else {
                return {...t, isDone: isDone}
            }
        });
        this.setState({
            tasks: newTasks
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

