import React from "react"

const Timer = ({remainingTime}) => {
  const minute = () => {
    return Math.floor(remainingTime / 60)
  }

  const second = () => {
    return remainingTime % 60;
  }

  return (
    <div className="timer">
      <span>Time Remaining:</span> {remainingTime &&
          <span>
            {minute()} mins {second()} secs
          </span>
    }
    </div>
  );

}

export default Timer
