import React, { useState, useRef, useContext } from "react";
import  { ContextGame } from "../../contexts/GameContext";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

function Gamelogic() {
  const [flying, setFlying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(1);
  const [planeCrashed, setPlaneCrashed] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const [cashedOutAt, setCashedOutAt] = useState(null);
  const [winnings, setWinnings] = useState(1);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const targetPoint = useRef((Math.random() * 5 + 1).toFixed(2));
  const betAmount = 50;
  const [seetingUp, setSettingUp] = useState(false);
  let value = 1;
  let speed = 0.02;
  let gameInterval = useRef(null);
  const [playerWin, setPlayerWin] = useState(false);
  const [playerLose, setPlayerLose] = useState(false);
  const [money, setMoney] = useState(0);

  const { setWalletBalance , walletBalance} = useContext(ContextGame);
  const navigate = useNavigate()

  const startLogic = () => {
    //console.log("Target is", targetPoint.current);
    gameInterval.current = setInterval(() => {
      value = parseFloat((value + speed).toFixed(2));
      setCurrentScore(value);
      setWinnings(value);
      checkIfTargetHit();
    }, 100);
  };

  function checkIfTargetHit() {
    if (value > 2) speed = 0.04;
    if (value > 3) speed = 0.06;
    if (value > 5) speed = 0.12;

    if (value >= targetPoint.current) {
      clearInterval(gameInterval.current);
      if(!playerWin){
        textRef.current.style.color = "red";
      }
      

      setPlaneCrashed(true);

      if (!playerWin) setPlayerLose(true);
      setFlying(false);
    }
  }

  const [countDown, setCountDown] = useState(5);
  const startGame = async () => {
    if (gameStarted) return;
    setSettingUp(true);
    const count = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setSettingUp(false);
    clearInterval(count);
    setGameStarted(true);
    setFlying(true);
    setPlaneCrashed(false);
    setCashedOut(false);
    setCashedOutAt(null);
    iconRef.current.style.transform = "translateY(-200px)";
    startLogic();
  };

  const cashOut = () => {
    if (cashedOut || !gameStarted) return;
    setCashedOut(true);
    setCashedOutAt(winnings);
    setPlayerWin(true);
    const amount = betAmount * winnings;
    setMoney(amount);
    //console.log("Cashed out at", winnings);
  };

 
  return (
    <section className="flex flex-col justify-center items-center mt-5">
      <div className="border relative h-72 w-80 rounded-xl">
        <div className="w-full h-full flex justify-center items-end">
          <div className="absolute flex top-25 items-baseline gap-1 justify-center">
            <h1 ref={textRef} className="text-6xl">
              {currentScore}x
            </h1>
          </div>
          {planeCrashed && (
            <div className="text-red-500 top-40 mt-2 text-3xl absolute">
              Crashed!
            </div>
          )}
          <div ref={iconRef} className="iconWrapper duration-1000 mb-5">
            {flying && !planeCrashed && (
              <i className="ri-rocket-2-fill text-5xl flying"></i>
            )}
            {!flying && !planeCrashed && (
              <i className="ri-rocket-fill text-3xl"></i>
            )}

            {!flying && planeCrashed && <i className="ri-rocket-fill text-3xl"></i>}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        {seetingUp && (
          <div className="mt-5 flex gap-2 items-center">
            starting... <p className="text-2xl">{countDown}</p>
          </div>
        )}
        {gameStarted && (
          <div className="flex justify-between px-2">
           
            {cashedOut ? (
              ""
            ) : (
              <button
                onClick={cashOut}
                className="px-4 py-2 border flex justify-center items-center border-green-500 text-green-500 rounded-lg hover:text-white transition duration-300"
              >
                CashOut at {(currentScore * 50).toFixed(0)}
              </button>
            )}
          </div>
        )}
        {!gameStarted && !seetingUp && (
          <div className="">
            <button
              onClick={startGame}
              className="px-4 text-xl py-2 border rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Start Game 50rs
            </button>
          </div>
        )}
      </div>
      <div className="">
        {playerWin && gameStarted && (
          <div className="text-center">
            <div className="text-green-500 text-xl">Congrats u won {money}rs</div>
            
            
          </div>
        )}

        {!playerWin && planeCrashed && (
          <div className="text-red-500">oh no! you lost</div>
        )}
      </div>
      {playerWin && planeCrashed && (
        <button
        onClick={()=>{
          //console.log(walletBalance,"bef")
          const newbal = parseInt(walletBalance + money)
          setWalletBalance(newbal);
          localStorage.setItem('currentBalance',newbal)
          navigate(-1)
          
        }}
        className="px-4 mt-5 py-2 border rounded-lg hover:bg-gray-800 transition duration-300"
      >
        withdraw {money}
      </button>
        )}
        {
         playerWin && !planeCrashed &&  <div className=" text-sm mt-5 text-gray-300">please wait...</div>
        }

    </section>
  );
}

export default Gamelogic;
