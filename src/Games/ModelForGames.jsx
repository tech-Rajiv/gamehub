import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGame } from "../contexts/GameContext";

function ModelForGames({ stats ,setShowModel }) {
  const navigate = useNavigate()
  const {setWalletBalance} = useContext(ContextGame)
const handelTakingWinnings = () => {
  const totalAmount = parseInt(localStorage.getItem('currentBalance')) + stats.won
  localStorage.setItem('currentBalance',totalAmount)
  setWalletBalance(totalAmount)
  navigate('/')

}

const resumeGame =()=> {
  setShowModel(false)
}
  return (
    <div className="model-cover">
      <div className="text-black model-content">
        <h4 className="text-center">{stats.head}</h4>
        <h1 className="text-center text-xl mt-5 font-semibold">{stats.main}</h1>
        {stats.para && <p className="mt-2 text-center text-sm">{stats.para}</p>}
        {stats.btn2 == false ? (
          <div className="text-center mt-5">
            <button onClick={()=> navigate('/')} className="btn-outline">{stats.btn1}</button>
          </div>
        ) : (
          <div className="flex justify-between gap-5 mt-5">
            <button onClick={handelTakingWinnings} className="btn-outline">{stats.btn1}</button>
            <button onClick={resumeGame} className="btn-primary">{stats.btn2}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelForGames;
