import React from "react"

const CellRow = ({row}) => {
  const Cells = row.map((cell, index) => {
    return (<td className='cell' key={index}>{cell}</td>)
  });

  return (
    <tr className="cell-row">
      {Cells}
    </tr>
  );
};

export default CellRow
