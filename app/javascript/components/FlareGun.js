import React from "react"


const FlareGun = ({ startGame, label }) => {
  return(
    <div className="flaregun">
      <button type="button" onClick={startGame} className="btn btn-primary">{label}</button>
    </div>
  )
};


export default FlareGun
