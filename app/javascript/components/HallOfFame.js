import React from "react"

const HallOfFame =({highScores})=> {
  const Rows = highScores.map((row, index) => {
    return <tr key={index}>
      <td>{row.name}</td>
      <td>{row.score}</td>
    </tr>
  });

    return (
      <div className="hall-of-fame">
        <div className="score-board mb-1">
          <h4>Hall Of Fame</h4>
          <table className='table table-dark table-sm' id="score-table">
            <thead>
            <tr>
              <td>NAME</td>
              <td>SCORE</td>
            </tr>
            </thead>
            <tbody>
            {Rows}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default HallOfFame
