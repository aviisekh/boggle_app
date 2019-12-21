import React from "react"
import CellRow from "./CellRow";

const Board =  ({board}) => {

  const CellRows = board.map( (row, index)  => {
    return (<CellRow row={row} key={index}></CellRow>)
  });

  return (
    <div className="board">
      <table id="board-table">
        <tbody>
        {CellRows}
        </tbody>
      </table>
    </div>
  );
};

export default Board
