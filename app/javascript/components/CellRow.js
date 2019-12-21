import React from "react"
import Cell from "./Cell";

class CellRow extends React.Component {
  render() {
    return (
      <tr className="cell-row">
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
      </tr>
    );
  }
}

export default CellRow
