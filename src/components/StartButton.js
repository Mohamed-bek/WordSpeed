import React from "react";

function StartButton({ startGame }) {
  return (
    <div className="start">
      <button onClick={startGame}>Start Play</button>
    </div>
  );
}

export default StartButton;
