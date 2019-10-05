import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CounterApp from "./Component/Counter/CounterApp";
import * as serviceWorker from "./serviceWorker";
import { store } from "./Store/Reducer/reducer";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { InputTodoApp } from "./Component/InputTodo/inputTodo";

ReactDOM.render(
  <Provider store={store}>
    {/* <CounterApp value={store.getState()} /> */}

    <InputTodoApp></InputTodoApp>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
