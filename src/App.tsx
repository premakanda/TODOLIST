import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";
import {getTodolistTC, createTodolistTC} from "./reducer";
import {ITodolist} from "./types/types";
import {Dispatch} from "redux";
import { AppState } from './store';



interface IMapStateProps {
    todolists: Array<ITodolist>
}

interface IMapDispatchProps {
    getTodolistTC: () => void;
    createTodolistTC: (title: string) => void;
}

export interface IState{
    todolists: Array<ITodolist>
}

class App extends React.Component <IMapStateProps & IMapDispatchProps, IState > {

    componentDidMount() {
        this.restoreState();
    }

    state: IState = {
        todolists: []
    }

    restoreState = () => {
        this.props.getTodolistTC();
    }

    addTodoList = (title: string) => {
        this.props.createTodolistTC(title);
    }


    render = () => {
        let todoLists = this.props.todolists.map(tl => <TodoList id={tl.id} title={tl.title} tasks={tl.tasks} key={tl.id}/>)
        return (
            <div className="app">
                <div>
                    <AddNewItemForm addItem={this.addTodoList} />
                </div>    
                <div className="appWrapper">
                    {todoLists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState): IMapStateProps => {
    return {
        todolists: state.reducer.todolists
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchProps => {
    return {
        getTodolists: () => {
            const thunk: any = getTodolistTC();
            dispatch(thunk);
        },
        createTodolist: (newTodoList: string) => {
            const thunk: any = createTodolistTC(newTodoList);
            dispatch(thunk);
        }

    }
}*/

const ConnectedApp = connect(mapStateToProps, {getTodolistTC, createTodolistTC})(App);
export default ConnectedApp;
