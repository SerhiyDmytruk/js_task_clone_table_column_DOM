'use strict';

// write your code here
const table = document.querySelector('table');

function extendNonBodyBlock(block) {
  Array.from(block.rows).forEach((item) => {
    const clone = item.cells[1].cloneNode(true);
    const targetCell = item.cells[block.rows[0].cells.length - 2];

    targetCell.after(clone);
  });
}

const tHead = table.tHead;
const tFoot = table.tFoot;
const tBody = table.tBodies[0];

[tHead, tFoot, tBody].forEach((block) => {
  extendNonBodyBlock(block);
});
