import React from "react"

const CellRow = function ({row}) {
  const Cells = row.map(function (cell, index) {
    return (<td className='cell' key={index}>{cell}</td>)
  });

  return (
    <tr className="cell-row">
      {Cells}
    </tr>
  );
};

export default CellRow
