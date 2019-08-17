export const selectionSort = arr => {
  let numArray = arr.map(Number);

  for (let i = 0; i < numArray.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[j] < numArray[minIndex]) {
        minIndex = j;
      }
    }

    const tempElement = numArray[minIndex];
    numArray[minIndex] = numArray[i];
    numArray[i] = tempElement;
  }

  return numArray;
};
