import { createElement } from "../helpers/createElement.js";
import { itemMove } from "./itemMove.js";

const playground = document.querySelector(".playground");

export const renderField = () => {
  const size = 4;
  let matrix = [];

  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
        const itemNumber = i * size + j + 1;
        
      if (itemNumber !== 16) {
        matrix[i][j] = itemNumber;
        createElement({
          tag: "div",
          classList: ["item"],
          parentElement: playground,
          textContent: itemNumber,
          data: itemNumber,
        });
      } else {
        matrix[i][j] = null;
        createElement({
          tag: "div",
          classList: ["item"],
          parentElement: playground,
          textContent: "",
          data: "empty",
        });
      }
    }
  }

  document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        itemMove(item, matrix, size);
      });
  });
};
