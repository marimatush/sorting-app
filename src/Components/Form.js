import React, { Component } from "react";
import { selectionSort } from "./sortingAlgorithms";
import { initRandomArray } from "./utils";

const SELECTION_SORT = "selectionSort";
const BUBBLE_SORT = "bubbleSort";
const NONE = "";

const algorithmMap = {
  [NONE]: arr => arr,
  [SELECTION_SORT]: selectionSort,
  [BUBBLE_SORT]: arr => arr
};

const algorithmLabelMap = {
  [NONE]: "Please choose an algorithm",
  [SELECTION_SORT]: "Selection Sort",
  [BUBBLE_SORT]: "Bubble Sort"
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayValue: initRandomArray(10).join(","),
      separatorValue: ",",
      currentAlgorithm: NONE,
      result: []
    };

    this.handleChangeArray = this.handleChangeArray.bind(this);
    this.handleChangeSeparator = this.handleChangeSeparator.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.calcResult = this.calcResult.bind(this);
  }

  handleChangeArray(event) {
    this.setState({
      arrayValue: event.target.value
    });
  }

  handleChangeSeparator(event) {
    this.setState({ separatorValue: event.target.value });
  }

  handleChangeSelect(event) {
    this.setState({ currentAlgorithm: event.target.value });
  }

  calcResult() {
    const unsortedArray = this.state.arrayValue.split(
      this.state.separatorValue
    );
    const sortedArray = algorithmMap[this.state.currentAlgorithm](
      unsortedArray
    );

    this.setState({
      result: sortedArray
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>Enter array of numbers</div>
          <input
            type="text"
            value={this.state.arrayValue}
            onChange={this.handleChangeArray}
          />
          <div>
            Separator{" "}
            <input
              type="text"
              value={this.state.separatorValue}
              onChange={this.handleChangeSeparator}
            />
          </div>
        </div>
        <div>
          Choose sorting algorithm{" "}
          <select
            value={this.state.currentAlgorithm}
            onChange={this.handleChangeSelect}
          >
            {Object.keys(algorithmLabelMap).map((key, index) => {
              return (
                <option value={key} key={index}>
                  {algorithmLabelMap[key]}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button type="button" onClick={this.calcResult}>
            Sort
          </button>
        </div>
        <div>
          <h2>Sorting result</h2>
          {/* <textarea value={this.state.result} /> */}
          <div>{`Used Algorithm: ${
            algorithmLabelMap[this.state.currentAlgorithm]
          }`}</div>
          <div>{`Sorting Result: ${this.state.result.join(
            this.state.separatorValue
          )}`}</div>
        </div>
      </div>
    );
  }
}

export default Form;
