import React, { Component } from "react";
import Form from "./Components/Form";
import Result from "./Components/Result";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to sorting-app</h1>
        <Form />
        <Result result={"42"} />
      </div>
    );
  }
}

export default App;
