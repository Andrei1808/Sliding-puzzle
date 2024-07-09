export const findItemPosition = (matrix, size, data) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === data) {
        return { row: i, col: j };
      }
    }
  }
};
