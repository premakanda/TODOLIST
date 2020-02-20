import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";
import {getTodolistTC, createTodolistTC} from "./reducer";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    state = {
        todolists: []
    }

    restoreState = () => {
        this.props.getTodolists();
    }

    addTodoList = (title) => {
        this.props.createTodolist(title);
    }


    render = () => {
        let todoLists = this.props.todolists.map(tl => <TodoList id={tl.id} title={tl.title} tasks={tl.tasks} key={tl.id}/>)
        return (
            <div className="app">
                <div>
                    <AddNewItemForm addItem={this.addTodoList} delete={this.deleteTodoList}/>
                </div>    
                <div className="appWrapper">
                    {todoLists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodolists: () => {
            const thunk = getTodolistTC();
            dispatch(thunk);
        },
        createTodolist: (newTodoList) => {
            const thunk = createTodolistTC(newTodoList);
            dispatch(thunk);
        }

    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
