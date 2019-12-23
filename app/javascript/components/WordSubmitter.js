import React from "react"

const WordSubmitter = ({inputWord, handleWordInput, submitWord, submitterClass}) => {
  return (
    <div className="submit-word mt-2">
      <form onSubmit={submitWord} >
        <div className="input-group mt-3">
          <input type="text" className={"form-control "+ submitterClass} value={inputWord} onChange={handleWordInput} placeholder="Enter word"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Submit Word</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WordSubmitter