import React, { useContext } from 'react'
import { ContextGame } from '../contexts/GameContext'

function Header() {

    const {walletBalance} = useContext(ContextGame)
  return (
    <div className="flex py-5 justify-between px-3 items-center bg-black shadow-2xs rounded-2xl ">
        <h1 className="text-xl font-semibold">GAMEZILLA</h1>
        <div className="flex  items-center">
          <div className="flex gap-2 items-center">
            <span className="">
              <i className="ri-money-rupee-circle-line text-base"></i>
            </span>
            <h1 className="text-lg font-semibold">{walletBalance}</h1>
          </div>
          <div>
            <i className="ri-wallet-3-fill text-xl ml-2"></i>
          </div>
          <div className="ml-4">
            <button  className="btn-outline">
               LOGIN
            </button>
          </div>
        </div>
      </div>
  )
}

export default Header