import React from "react"

const WordSubmitter = ({submitWord}) => {
  return (
    <div className="submit-word mt-2">
      <form onSubmit={submitWord} >
        <div className="input-group mt-3">
          <input type="text" className="form-control" placeholder="Enter word"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Submit Word</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WordSubmitter