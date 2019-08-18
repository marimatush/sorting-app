export const selectionSort = arr => {
  let resultArr = arr;

  for (let i = 0; i < resultArr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < resultArr.length; j++) {
      if (resultArr[j] < resultArr[minIndex]) {
        minIndex = j;
      }
    }
    resultArr = swapElements(minIndex, i, resultArr);
  }

  return resultArr;
};

export const bubbleSort = arr => {
  let resultArr = arr;
  let swapped = false;

  for (let i = 0; i < resultArr.length; i++) {
    swapped = false;
    for (let j = 0; j < resultArr.length - i - 1; j++) {
      if (resultArr[j] > resultArr[j + 1]) {
        resultArr = swapElements(j, j + 1, resultArr);
        swapped = true;
      }
    }
    if (!swapped) {
      return resultArr;
    }
  }

  return resultArr;
};

const swapElements = (i1, i2, arr) => {
  let newArr = arr;
  const tempElement = newArr[i1];
  newArr[i1] = newArr[i2];
  newArr[i2] = tempElement;
  return newArr;
};
