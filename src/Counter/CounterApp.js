import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { store } from "./reducer";

class CounterApp extends React.Component {
  test;
  count;
  constructor(props) {
    super(props);
    this.state = { count: store.getState() };
    console.log(this.props.value);
    this.increment = this.increment.bind(this);

    store.subscribe(x => {
      this.setState({ count: store.getState() });
    });
  }
  increment() {
    store.dispatch({ type: "Increment" });
    this.count = store.getState();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to redux</h1>
        {this.state.count}
        <button
          onClick={() => {
            store.dispatch({ type: "Decrement" });
          }}
        >
          Decrement
        </button>
        <button onClick={this.increment}>Increment</button>
        <button
          onClick={() => {
            store.dispatch({ type: "Reset" });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default CounterApp;
