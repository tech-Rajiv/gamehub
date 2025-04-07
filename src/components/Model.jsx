import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Model({
  backCbFn,
  stats,
  mainMsg,
  modelInicationMsg = "alert",
  declineBtnMsg = "go Home",
  resume,
}) {
  const [playerWon, setPlayerWon] = useState(stats.playerWon);
  if (stats.playerWon) {
    console.log("hewon");
    modelInicationMsg = `game Paused!`;
    mainMsg = `Congrats, Your Winnings : ${stats.winAmount}`;
    declineBtnMsg = `withdraw ${stats.winAmount}`;
  } else {
    console.log("he lost");
    modelInicationMsg = `bad luck!`;
    mainMsg = `oh! no, You lost your winnings. `;
  }

  

  const modelClick = (e) => {
    if (e.target.classList.contains("model-cover")) setModelOpen(false);
  };

  return (
    <div className="model-cover">
      <div className="text-black model-content">
        <h4 className="text-center">{modelInicationMsg}</h4>
        <h1 className="text-center text-xl mt-5 font-semibold">{mainMsg}</h1>
        {playerWon && (
          <p className="mt-2 text-center text-sm">
            Are you sure you want to proceed with your withdrawal?
          </p>
        )}
        <div className="flex justify-center gap-5 mt-5">
          <button onClick={backCbFn} className="btn-outline-light">
            {declineBtnMsg}
          </button>{" "}
          {playerWon && (
            <button onClick={resume} className="btn-primary">
              Resume Game
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Model;
