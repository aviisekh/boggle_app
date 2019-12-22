import React from "react"

const WordSubmitter = ({submitWord}) => {
  return (
    <div className="submit-word">
      <form onSubmit={submitWord}>
        <input type='text'/>
        <button type="submit" className="btn btn-lg start-button">Submit</button>
      </form>
    </div>
  );
};

export default WordSubmitter