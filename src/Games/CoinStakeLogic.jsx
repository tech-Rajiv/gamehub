import React, { useEffect, useState } from "react";

function CoinStakeLogic({ playerLost, playerWon }) {
  const [gameEnd, setGameEnd] = useState(false);
  const [winAmount, setWinAmount] = useState(0);
  const [rightCards, setRightCards] = useState(0);

  function makeCards() {
    let cards = [
      ...Array(21).fill({
        type: "diamonds",
        url: "./src/assets/diamond.webp",
        classLi: "w-full opacity-0  object-cover h-full",
      }),
      ...Array(4).fill({
        type: "bombs",
        url: "./src/assets/bomb.webp",
        classLi: "w-full opacity-0  object-cover h-full",
      }),
    ];
    let len = cards.length;
    for (let i = 0; i < len; i++) {
      let random = Math.floor(Math.random() * len);
      [cards[i], cards[random]] = [cards[random], cards[i]];
    }
    return cards;
  }
  const [cards, setCards] = useState(makeCards());

  const cardClicked = (e, item) => {
    if (gameEnd == true) return;
    e.target.classList.remove("opacity-0");
    if (item.type === "bombs") {
      const sound = new Audio("./src/audio/lose.mp3");
      sound.play();
      setGameEnd(true);
      revealAllCards();
      return;
    }
    setRightCards((prev) => prev + 1);
    const sound = new Audio("./src/audio/win.mp3");
    sound.play();
    setWinAmount((prev) => prev + 50);
  };

  const withdraw = () => {
    if (gameEnd == true) return;
    if (rightCards < 1) {
      alert("win at least one daimont to withdraw");
      return;
    }
    decideVictory(true);
  };

  function decideVictory(stats) {
    if (stats) {
      const status = {
        playerWon: stats,
        numOfCardsRight: rightCards,
        winAmount: winAmount,
      };
      playerWon(status);
    } else {
      const status = {
        playerWon: stats,
        numOfCardsRight: rightCards,
        winAmount: winAmount,
      };
      playerLost(status);
    }
  }

  function revealAllCards() {
    cards.forEach((item, index) => {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card, i) => {
            if (i == index) {
              return { ...card, classLi: "w-full h-full object-cover" };
            }
            return card;
          })
        );
      }, index * 20);
    });
    setTimeout(() => {
      decideVictory(false);
    }, 1500);
  }

  return (
    <section className="shadow-2xl w-full mt-5 ">
      <h1 className="text-center">Mines</h1>
      <div className="gameWrapper w-full h-full flex flex-col border py-5">
        <div className="wrapperScore w-full  flex justify-center">
          <div className="bg-gray-900 w-full mx-5 sm:w-[42%] rounded-2xl h-20 flex gap-5 justify-center items-center">
            <div>
              <span>winnings: </span>
              <span className="text-xl font-bold"> {winAmount}</span>
            </div>
            <div>
              <button onClick={withdraw} className="btn-outline ">
                withdraw
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="shadow-2xl max-w-fit mx-auto rounded-2xl  px-5">
            <div className="grid grid-cols-5 gap-3 ">
              {cards &&
                cards.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="sm:w-18 overflow-hidden  sm:h-20 w-14 h-16 border-1 rounded-md"
                    >
                      <img
                        onClick={(e) => cardClicked(e, item)}
                        src={item.url}
                        alt="img"
                        className={item.classLi}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          
        </div>
      </div>
      <div className="note flex justify-center mt-5">
            <p className="text-gray-400 text-center text-sm">note: Only 4 box has bomb else every box has diamond! try ur luck</p>
          </div>
    </section>
  );
}

export default CoinStakeLogic;
