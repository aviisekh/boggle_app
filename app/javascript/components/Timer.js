import React from "react"

const Timer = ({remainingTime}) => {
  const minute = () => {
    return Math.floor(remainingTime / 60)
  }

  const second = () => {
    return remainingTime % 60;
  }

  return (
    <div className="timer mb-1  p-2">
      {remainingTime &&
          <strong>
            {minute()} mins {second()} secs
          </strong>
    }
    </div>
  );

}

export default Timer
