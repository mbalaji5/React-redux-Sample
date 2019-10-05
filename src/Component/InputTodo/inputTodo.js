import React from "react";
import "../../App.css";
import { store } from "../../Store/Reducer/reducer";
import { AddTodo } from "../../Store/Action/action";

export class InputTodoApp extends React.Component {
  todoText;
  constructor(props) {
    super(props);
    this.state = { todoItem: this.props.todoItem | "" };
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  addtoItemList = () => {
    store.dispatch(AddTodo(this.todoText.value));
    this.todoText.value = "";
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Todo List</h1>
        <div>
          <label>Describe your todo list </label>
          {/* <input
            type="text"
            ref={node => (this.todoText = node)}
            onBlur={this.handleBlur}
          ></input> */}
          <input ref={node => (this.todoText = node)}></input>
          {"  "}
          {/* <button
            onClick={() => {
              store.dispatch(AddTodo(this.todoText.value));
              this.todoText.value = "";
            }}
          >
            Add
          </button> */}

          <button onClick={this.addtoItemList}>Add</button>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
