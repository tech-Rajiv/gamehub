import React, { useContext, useEffect, useState } from "react";
import { ContextGame } from "../contexts/GameContext";

function Banner() {
  const { walletBalance, setWalletBalance } = useContext(ContextGame);

  const [used, setUsed] = useState(false);

  const handelClick = () => {
    localStorage.setItem("usedBonus", "true");
    //console.log("btnclicked n chmnged storge");
    setUsed(true);

    const prev = parseInt(localStorage.getItem("currentBalance"));
    //console.log(prev, "prev");
    if (prev) {
      setWalletBalance((initial) => initial + 1000);
    } else {
      localStorage.setItem("currentBalance", "1000");
      setWalletBalance(1000);
    }
  };

  useEffect(() => {
    const currentStatus = localStorage.getItem("usedBonus", "false");
    if (currentStatus) {
      setUsed(true);
    }
  }, []);
  return (
    <div>
      {used == true ? (
        <div className=" flex  items-center justify-center py-3   overflow-hidden bg-linear-to-r from-[#9c5472] to-[#504d7e] ">
          Claimed <i className="ri-verified-badge-fill ml-2 text-xl"></i>
        </div>
      ) : (
        <div className=" flex flex-col sm:flex-row gap-2 sm:gap-15 items-center justify-center py-3  overflow-hidden bg-linear-to-r from-[#9c5472] to-[#504d7e] ">
          <div className="text-gray-200">new player ? Dont worry! </div>

          <div className="flex items-center gap-2">
            free
            <h3 className=" text-lg font-semibold">1000rs</h3>
            <button
              onClick={handelClick}
              className="bg-white px-3 py-1 text-sm rounded-full text-black"
            >
              Claim
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
