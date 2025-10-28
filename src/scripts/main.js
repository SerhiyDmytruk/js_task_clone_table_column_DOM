'use strict';

// write your code here
const table = document.querySelector('table');

function extendNonBodyBlock(block) {
  const clone = block.rows[0].cells[1].cloneNode(true);
  const targetCell = block.rows[0].cells[3];

  targetCell.after(clone);
}

const tHead = table.tHead;
const tFoot = table.tFoot;

[tHead, tFoot].forEach((block) => {
  extendNonBodyBlock(block);
});

const tBody = table.tBodies[0];

Array.from(tBody.rows).forEach((item) => {
  const clone = item.cells[1].cloneNode(true);
  const targetCell = item.cells[3];

  targetCell.after(clone);
});
