import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rules from "../components/Rules";
import Header from "../components/Header";
import CoinStakeLogic from "./CoinStakeLogic";
import Model from "../components/Model";
import { ContextGame } from "../contexts/GameContext";

function CoinStake() {
  const [modelopen, setModelOpen] = useState(false);
  const [didPlayerWon, setDidPlayerWon] = useState(false);
  const navigate = useNavigate();
  const [stats, setStats] = useState("");
  const [rulesChecked, setRulesChecked] = useState(false);
  const { setWalletBalance } = useContext(ContextGame);

  useEffect(()=>{
    setWalletBalance(parseInt(localStorage.getItem("currentBalance") || 0));
  },[])
  
  const playerLost = (status) => {
    setStats(status);
    setDidPlayerWon(false);
    setModelOpen(true);
  };
  const playerWon = (status) => {
    setStats(status);
    setDidPlayerWon(true);
    setModelOpen(true);
  };

  const backCbFn = () => {
    setModelOpen(false);
    if (!didPlayerWon) {
      navigate("/");
      return;
    }
    const getBalanceFromStorage = parseInt(
      localStorage.getItem("currentBalance") || 0
    );
    const currentWin = stats.winAmount;
    console.log(getBalanceFromStorage, currentWin, "done");
    localStorage.setItem("currentBalance", currentWin + getBalanceFromStorage);
    setWalletBalance(currentWin + getBalanceFromStorage);
    navigate("/");
  };

  const resume = () => {
    setModelOpen(false);
  };
  return (
    <section>
      <Header />
      <div className="px-2 mt-2">
        <button onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line mr-2 text-lg"></i>Go Back
        </button>
        <Rules setRulesChecked={setRulesChecked} />
        {rulesChecked && (
          <CoinStakeLogic playerLost={playerLost} playerWon={playerWon} />
        )}

        {modelopen && (
          <Model
            didPlayerWon={didPlayerWon}
            stats={stats}
            backCbFn={backCbFn}
            resume={resume}
          />
        )}
      </div>
    </section>
  );
}

export default CoinStake;
