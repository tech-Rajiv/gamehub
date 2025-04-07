import React, { useState } from 'react'
import { createContext } from 'react'

export const ContextGame = createContext()

function GameContext({children}) {  
const [walletBalance, setWalletBalance] = useState(0)
   

  return (
    <ContextGame.Provider value={{ walletBalance, setWalletBalance}}>
      {children}
    </ContextGame.Provider>
    
  )
}

export default GameContext