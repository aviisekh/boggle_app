import React from "react"

const ScoreBoard = ({score}) => {
  return (
    <div className="score-board">
      Score: {score.allScore}
    </div>
  );
};

export default ScoreBoard
