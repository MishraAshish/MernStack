import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware"; //make aync call to api
import thunk from 'redux-thunk';//make aync call to api

import user from "./App/State/UserReducer";

let myLogger = () => (next) => (action) => {    //a custom middleware to log store interaction
    console.log("Logged Action : Store File ", action);
    next(action);
};

export default createStore(
    combineReducers( //club all the reducers that we have in our application like user, product ...
    {
        user : user
    }),
    {},
    applyMiddleware(myLogger ,thunk ,promise)// adding middlewares that we are going to use in our applicatino
)