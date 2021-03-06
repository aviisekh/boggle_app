import React from "react"

const ScoreBoard = ({score}) => {
  const Rows = score.eachScore.map((row, index) => {
    return <tr key={index}>
      <td>{row.word}</td>
      <td>{row.score}</td>
    </tr>
  });
  return (
    <div className="score-board mb-1">
      <table className='table table-dark table-sm' id="score-table">
        <thead>
        <tr>
          <td>WORD</td>
          <td>SCORE</td>
        </tr>
        </thead>
        <tbody>
        {Rows}
        <tr>
          <td>Total</td>
          <td>{score.allScore}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard
