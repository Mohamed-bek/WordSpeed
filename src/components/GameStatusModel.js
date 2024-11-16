import React from "react";

function GameStatusModal({ status, onRestart }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{status}</h2>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}

export default GameStatusModal;
