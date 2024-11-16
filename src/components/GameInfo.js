import React from "react";

function GameInfo({ level, timeLeft, score, totalWords }) {
  return (
    <div className="para">
      Your level is [ <span>{level}</span> ] and the time is [{" "}
      <span>{timeLeft}</span> ]
      <div className="scoretime">
        <div className="time">
          Time left: <span>{timeLeft}</span>
        </div>
        <div className="score">
          Score: <span>{score}</span> from: <span>{totalWords}</span>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
