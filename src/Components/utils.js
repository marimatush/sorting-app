export const initRandomArray = n => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 1000) + 1);
  }

  return arr;
};

export const clearArray = arr => {
  // return arr.map(Number).filter(!isNaN);
  return arr.map(Number).filter(isNumber);
};

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}
