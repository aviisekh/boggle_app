import React from "react"
import CellRow from "./CellRow";

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <table id="board-table">
          <tbody>
            <CellRow/>
            <CellRow/>
            <CellRow/>
            <CellRow/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board
