import React from "react"

const ScoreBoard = ({foundWords}) => {
  return (
    <div className="ScoreBoard">
      Found Words: {foundWords.toString()}
    </div>
  );
};

export default ScoreBoard
