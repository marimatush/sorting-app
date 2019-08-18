import React, { Component } from "react";
import { selectionSort, bubbleSort } from "./sortingAlgorithms";
import { initRandomArray, clearArray } from "./utils";

const NONE = "";
const SELECTION_SORT = "selectionSort";
const BUBBLE_SORT = "bubbleSort";

const algorithmMap = {
  [NONE]: arr => arr,
  [SELECTION_SORT]: selectionSort,
  [BUBBLE_SORT]: bubbleSort
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
      arrayValue: initRandomArray(10000).join(","),
      separatorValue: ",",
      currentAlgorithm: SELECTION_SORT,
      duration: 0,
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
    this.setState({
      currentAlgorithm: event.target.value,
      result: [],
      duration: 0
    });
  }

  calcResult() {
    const unsortedArray = clearArray(
      this.state.arrayValue.split(this.state.separatorValue)
    );

    if (this.state.currentAlgorithm === NONE || unsortedArray.length === 0) {
      this.setState({
        result: [],
        duration: 0
      });
      return;
    }

    const startTime = performance.now();
    const sortedArray = algorithmMap[this.state.currentAlgorithm](
      unsortedArray
    );
    const endTime = performance.now();

    this.setState({
      result: sortedArray,
      duration: (endTime - startTime).toFixed(4)
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
          <div>{`Used Algorithm: ${
            algorithmLabelMap[this.state.currentAlgorithm]
          }`}</div>
          <div>{`Exectution time: ${this.state.duration} milliseconds`}</div>
          <div>{`Sorting Result: ${this.state.result.join(` `)}`}</div>
        </div>
      </div>
    );
  }
}

export default Form;
