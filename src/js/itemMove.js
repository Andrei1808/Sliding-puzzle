import { findEmptyCell } from "./findEmptyCell.js";
import { findItemPosition } from "./findItemPosition.js";

export const itemMove = (item, matrix, size) => {
  const itemData = Number(item.dataset.item);

  if (itemData === "empty") return;

    let emptyCell = findEmptyCell(matrix, size);
 console.log(emptyCell);

    let itemPosition = findItemPosition(matrix, size, itemData);
    console.log(itemPosition);

   
};
