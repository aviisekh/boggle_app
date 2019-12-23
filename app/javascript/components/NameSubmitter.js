import React from "react"

const NameSubmitter = ({submitName}) => {
  return (
    <div className="submit-name mt-2">
      <form onSubmit={submitName}>
        <div className="input-group mt-3">
          <input type="text" className="form-control"
                 placeholder="Enter your name"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Submit Name</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NameSubmitter