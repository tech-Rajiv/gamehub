import React, { useContext, useEffect } from "react";
import "../avator/aviator.css";
import Header from "../../components/Header";
import { ContextGame } from "../../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import GameLogic from '../avator/Gamelogic'

function Aviator() {
  const { walletBalance, setWalletBalance } = useContext(ContextGame);
  const navigate = useNavigate();

  useEffect(() => {
    setWalletBalance(localStorage.getItem("currentBalance"));
  }, []);

  return (
    <section>
      <Header />
      <div className="backBtn mt-2 px-2 mb-5">
        <button onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line mr-2 text-lg"></i>Go Back
        </button>
      </div>
      <h1 className="text-center">Aviator</h1>
      <div className="gameArea  w-full px-2">
        <GameLogic />
      </div>
    </section>
  );
}

export default Aviator;
