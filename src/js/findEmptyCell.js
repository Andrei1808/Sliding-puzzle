export const findEmptyCell = (matrix, size) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === null) {
        return { row: i, col: j };
      }
    }
  }
};
