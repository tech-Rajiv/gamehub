import React, { useContext } from 'react'
import { ContextGame } from '../contexts/GameContext'
import logo from '../assets/brandLogo.webp'

function Header() {

    const {walletBalance} = useContext(ContextGame)
  return (
    <div className="flex py-5 justify-between sm:px-8 px-5 items-center bg-black">
        <div className=""><img src={logo} className='h-8 w-full' alt="logo" /></div>
        <div className="flex  items-center">
          <div className="flex gap-2 items-center">
            <span className="">
              <i className="ri-money-rupee-circle-line text-xl"></i>
            </span>
            <h1 className="text-xl  font-semibold">{walletBalance}</h1>
          </div>
          <div>
            <i className="ri-wallet-3-fill text-2xl ml-2"></i>
          </div>
          <div className="ml-4">
            <button  className="outline rounded-md px-2 text-xl">
               +
            </button>
          </div>
        </div>
      </div>
  )
}

export default Header