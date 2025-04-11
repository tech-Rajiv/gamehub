import React from "react";
import { NavLink } from "react-router-dom";
import miness from "../assets/mines.webp"
import fortune from "../assets/fortuneOfApples.webp"
import aviator from "../assets/aviator.webp"

function Catagory() {
  return (
    <div className="allGamesHere max-w-4xl mx-auto">
      <div className=" w-full h-full px-5 sm:px-20 grid grid-cols-2 sm:grid-cols-3 justify-center gap-6">
       
        <NavLink
          to={"/mines"}
          className="firstGame hover:translate-y-[-5px] duration-200 gameKBC flex flex-col gap-2 "
        >
          <div className="w-36 h-36 bg-white overflow-hidden sm:h-40 sm:w-40 rounded-2xl">
            <img src= {miness} alt="mines" />
          </div>
          <div className="font-semibold text-lg">
           Mines
            <div className="text-sm font-normal">
              Win Upto <span className="text-xl">25x</span>
            </div>
          </div>
        </NavLink>
        <NavLink
          to={"/fortuneofapples"}
          className="firstGame hover:translate-y-[-5px] duration-200 gameKBC flex flex-col gap-2 "
        >
          <div className="w-36 h-36 bg-white overflow-hidden sm:h-40 sm:w-40 rounded-2xl">
            <img src={fortune} alt="mines" />
          </div>
          <div className="font-semibold text-lg">
         fortune of apples
            <div className="text-sm font-normal">
              Win Upto <span className="text-xl">10x</span>
            </div>
          </div>
        </NavLink>
        <NavLink
          to={"/aviator"}
          className="firstGame hover:translate-y-[-5px] duration-200 gameKBC flex flex-col gap-2 "
        >
          <div className="w-36 h-36 overflow-hidden sm:h-40 sm:w-40 rounded-2xl">
            <img src={aviator}  alt="avator" />
          </div>
          <div className="font-semibold text-lg">
         Aviator
            <div className="text-sm font-normal">
             Win Upto <span className="text-xl">10x</span>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="mt-10 sm:mt-15"><p className="text-center text-sm text-gray-400 mt-2">many more games to come...</p></div>
    </div>
  );
}

export default Catagory;
