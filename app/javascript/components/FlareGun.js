import React from "react"


const FlareGun = ({ startGame }) => {
  return(
    <div className="flaregun">
      <button type="button" onClick={startGame} className="btn btn-lg start-button">Start New Game</button>
    </div>
  )
}


export default FlareGun
