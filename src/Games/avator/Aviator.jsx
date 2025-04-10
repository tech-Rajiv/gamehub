import React, { useContext, useEffect, useState } from "react";
import "../avator/aviator.css";
import Header from "../../components/Header";
import { ContextGame } from "../../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import GameLogic from "../avator/Gamelogic";
import RulesForGame from "../RulesForGame";

function Aviator() {
  const { walletBalance, setWalletBalance } = useContext(ContextGame);
  const navigate = useNavigate();
  const rules = {
    head: "win upto 10x",

    body: "the plain will fly with multipying ur money",
    points: [
      "cashout before plane crash",
      "the more u wait the more the amount multiplies",
    ],
  };
 const [gameStart, setGameStart] = useState(false); 
  const [ruleAccepted, setRuleAccepted] = useState(false);
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
        {!ruleAccepted ? (
          <RulesForGame rules={rules} setGameStart={setGameStart} setRuleAccepted={setRuleAccepted} />
        ) : (
          <GameLogic />
        )}
      </div>
    </section>
  );
}

export default Aviator;
