import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { ContextGame } from "../contexts/GameContext";
import Header from "../components/Header";
import Catagory from "../components/Catagory";
import Hero from "../components/Hero";
import Accordian from "../components/Accordian";
import Info from "../components/Info";

function Home(props) {
  const { setWalletBalance } = useContext(ContextGame);

  useEffect(() => {
    const balance = localStorage.getItem("currentBalance");
    if (balance) {
      const newBalance = parseInt(localStorage.getItem("currentBalance"));
      setWalletBalance(newBalance);
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
