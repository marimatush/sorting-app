import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div>
        <div>Sorting result</div>
        <textarea>{this.props.result}</textarea>
      </div>
    );
  }
}

export default Result;
