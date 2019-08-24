import React, { Component } from "react";
import Form from "./Components/Form";
import "./App.css";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Welcome to sorting-app</h1>
        <Form />
      </div>
    );
  }
}

export default App;
