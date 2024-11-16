import React from "react";

function GameStatus({ status }) {
  return status && <div className="finish">{status}</div>;
}

export default GameStatus;
