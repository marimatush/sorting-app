import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Enter array of integers</div>
          <input type="text" />
          <div>
            Separator <input type="text" />
          </div>
        </div>
        <div>
          Choose sorting algorithm <select />
        </div>
        <div>
          <button type="button">Sort</button>
        </div>
      </div>
    );
  }
}

export default Form;
