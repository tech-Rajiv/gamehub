import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ContextGame } from "../contexts/GameContext";
import FortuneOfAppleLogics from "./FortuneOfAppleLogics";
import ModelForGames from "./ModelForGames";
import RulesForGame from "./RulesForGame";

function FortuneOfApples() {
  const rules = {
    head: "win upto 25x",

    body: "there are total six rows of card, each card hold a Apple, but the catch is it could be eaten Apple or  full Apple , starting from below the number of eaten apple rises!",
    points: [
      "one good Apple doubles your money",
      "one eaten apple and You lose",
      "at beginning only one eaten apple is present out of 5"
    ],
  };
  const navigate = useNavigate();
  const { setWalletBalance } = useContext(ContextGame);
  //const [playerWon ,setPlayerWon] = useState(false)
  const [showModel, setShowModel] = useState(false);
  const [winMoney, setWinMoney] = useState();

  useEffect(() => {
    setWalletBalance(parseInt(localStorage.getItem("currentBalance")));
  }, []);
  const [stats, setStats] = useState();

  const handelWithdrawModel = (amount) => {
    if (amount > 0) {
      setShowModel(true);
      setWinMoney(amount);
      setStats({
        head: "Congrats!",
        main: `Wow! Winnings : ${amount}`,
        para: " Are you sure you want to proceed with your withdrawal?",
        btn1: `withdraw : ${amount}`,
        btn2: "resume game",
        won: amount,
      });

      return;
    }
    if (amount == 0) {
      setTimeout(() => {
        setShowModel(true);
        setWinMoney(0);
        setStats({
          head: "oh no !",
          main: `You lost your winnings!`,
          para: "dont give up! keep trying.",
          btn1: `go Home`,
          btn2: false,
        });
      }, 1200);
    }
  };
  const [gameStart, setGameStart] = useState(false);
  const [ruleAccepted, setRuleAccepted] = useState();
  return (
    <section>
      <Header />
      <div className="backBtn mt-2 px-2 mb-5">
        <button onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line mr-2 text-lg"></i>Go Back
        </button>
      </div>
      <div className="text-center">Fortune of Apples</div>

      {!ruleAccepted && (
        <div className="mt-2 p-2">
          <RulesForGame
            rules={rules}
            setGameStart={setGameStart}
            setRuleAccepted={setRuleAccepted}
          />
        </div>
      )}
      {gameStart && (
        <div className="border flex justify-center py-10 px-1 mb-10 ">
          <FortuneOfAppleLogics
            handelWithdrawModel={handelWithdrawModel}
            setWinMoney={setWinMoney}
          />
        </div>
      )}
      {showModel && <ModelForGames setShowModel={setShowModel} stats={stats} />}
    </section>
  );
}

export default FortuneOfApples;
