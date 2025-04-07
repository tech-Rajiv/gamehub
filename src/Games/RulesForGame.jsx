import React, { useContext, useState } from "react";
import { ContextGame } from "../contexts/GameContext";

function RulesForGame({ rules, setRuleAccepted, setGameStart }) {
  const [chechBox, setCheckBox] = useState(false);
  const { setWalletBalance } = useContext(ContextGame);

  const handelStartGame = () => {
    const gameFees = 50;
    if (chechBox) {
      const getBalance = parseInt(localStorage.getItem("currentBalance"));
      if (getBalance < gameFees) {
        alert("You don't have enough balance to play the game");
        return;
      }
      localStorage.setItem("currentBalance", getBalance - gameFees);
      setWalletBalance((prev) => prev - gameFees);
      setRuleAccepted(true);
      setGameStart(true);
      console.log("okkk");
      return;
    }
    alert("Please accept the rules to start the game");
  };
  console.log(rules);
  return (
    <div className="outline w-full rounded-2xl sm:p-10  p-5 text-center ">
      <h1 className="text-xl font-semibold mb-5">{rules.head}</h1>
      <div className=" max-w-2xl mx-auto">
        <p className="mb-5 text-gray-200">{rules.body}</p>
        <h2 className="text-start mt-3  text-lg font-semibold">
          Your mission is simple:
        </h2>
        {rules.points.map((rule,i) => {
          return (
            <p key={i} className="mb-2 text-start text-gray-200">
              <i className="ri-money-dollar-box-line text-lg mr-2"></i>
              {rule}
            </p>
          );
        })}

        <div className="check text-start mt-5">
          <input
            className="w-4 h-4"
            id="checkBox"
            onChange={(e) => setCheckBox(e.target.checked)}
            type="checkBox"
          />
          <label htmlFor="checkBox">
            Accept and Pay <strong>50</strong>rs Fees
          </label>
        </div>

        <div className="mt-5">
          <button onClick={handelStartGame} className="btn-outline">
            Start Game 50rs
          </button>
        </div>
      </div>
    </div>
  );
}

export default RulesForGame;
