export const initRandomArray = n => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }

  return arr;
};
