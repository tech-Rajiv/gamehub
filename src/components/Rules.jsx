import React, { useContext, useState } from "react";
import { ContextGame } from "../contexts/GameContext";

function Rules({ setRulesChecked }) {
  const [chechBox, setCheckBox] = useState(false);
  const [rulesShow, setRulesShow] = useState(true);
  const { setWalletBalance } = useContext(ContextGame);
  const handelStartGame = (e) => {
    const gameFees = 50;
    if (chechBox) {
      const getBalance = parseInt(localStorage.getItem("currentBalance"));
      if (getBalance < gameFees) {
        alert("You don't have enough balance to play the game");
        return;
      }
      localStorage.setItem("currentBalance", getBalance - gameFees);
      setWalletBalance((prev) => prev - gameFees);
      setRulesShow(false);
      setRulesChecked(true);
      console.log("okkk");
      return;
    }
    alert("Please accept the rules to start the game");
  };

  return (
    <>
      {rulesShow && (
        <div className="outline w-full rounded-2xl sm:p-10  p-5 text-center mt-10">
          <h1 className="text-xl font-semibold mb-5">
            Win Upto 25X (50 to 1500rs)
          </h1>
          <div className=" max-w-2xl mx-auto">
            <p className="mb-5 text-gray-200">
              There are 30 cards in total, and each card hides a surprise — it
              could be a <strong>sparkling diamond</strong> that increases your
              winnings or a <strong>dangerous bomb</strong> that ends the game
              in an instant!
            </p>
            <h2 className="text-start mt-3  text-lg font-semibold">
              Your mission is simple:
            </h2>
            <p className="mb-2 text-start text-gray-200">
              <i class="ri-money-dollar-box-line text-lg mr-2"></i>one diamond
              equals 50rs more
            </p>
            <p className="mb-2 text-start text-gray-200">
              <i class="ri-money-dollar-box-line text-lg mr-2"></i>Collect as
              many diamonds as possible to maximize your rewards.
            </p>
            <p className="mb-2 text-start text-gray-200">
              <i class="ri-money-dollar-box-line text-lg mr-2"></i>Beware of
              bombs! Just one bomb will make you lose everything.
            </p>

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
      )}
    </>
  );
}

export default Rules;
