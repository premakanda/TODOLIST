import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk';

let rootReduser = combineReducers( {reducer});

export type AppState = ReturnType<typeof rootReduser>

const store = createStore(rootReduser, applyMiddleware(thunkMiddleware ));

export default store;