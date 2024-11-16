import React from "react";

function LevelSelector({ onSelectLevel }) {
  const levels = ["easy", "normale", "hard"];

  return (
    <div className="level">
      <p className="levelChoose">Choose Level</p>
      <div className="levels">
        {levels.map((lvl) => (
          <span key={lvl} onClick={() => onSelectLevel(lvl)}>
            {lvl}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LevelSelector;
