import React from "react"

const ScoreBoard = ({score}) => {
  return (
    <div className="ScoreBoard">
      Score: {score.allScore}
    </div>
  );
};

export default ScoreBoard
