import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { ContextGame } from "../contexts/GameContext";
import Header from "../components/Header";
import Catagory from "../components/Catagory";
import Hero from "../components/Hero";
import Accordian from "../components/Accordian";


function Home(props) {
  const { setWalletBalance, walletBalance } = useContext(ContextGame);
   //console.log(walletBalance,setWalletBalance)
  useEffect(() => {
    const balance = parseInt(localStorage.getItem("currentBalance"));
    //console.log(balance,"bef")
    if (typeof balance === "number") {
      const newBalance = parseInt(localStorage.getItem("currentBalance"));
    
      setWalletBalance(newBalance);
    }else{
     
      localStorage.setItem('currentBalance',walletBalance)
    }
  }, []);

  return (
    <section className="">
      <Header />
      <Banner />
      <Hero />
      <Catagory />

      <Accordian />
    </section>
  );
}

export default Home;
