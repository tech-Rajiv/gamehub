import React, { useEffect, useState } from "react";

function FortuneOfAppleLogics({
  setPlayerWon,
  handelWithdrawModel,
  setWinMoney,
}) {
  const [shouldBeAt, setShouldBeAt] = useState(5);
  const [gameEnd, setgameEnd] = useState(false);
  const [currentVictory, setCurrentVictory] = useState(0);
  let oneBad = [
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
  ];
  let twoBad = [
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
  ];
  let threeBad = [
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
  ];
  let fourBad = [
    { isApple: true, srcUrl: "./src/assets/apple.webp", classes: "opacity-0" },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
    {
      isApple: false,
      srcUrl: "./src/assets/eatenApple.webp",
      classes: "opacity-0",
    },
  ];

  const shuffleAll = (arr) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      let j = Math.floor(Math.random() * newArr.length);
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  const [arrayCard, setArrayCard] = useState();

  useEffect(() => {
    setArrayCard([
      shuffleAll(fourBad),
      shuffleAll(threeBad),
      shuffleAll(twoBad),
      shuffleAll(oneBad),
      shuffleAll(oneBad),
      shuffleAll(oneBad),
    ]);
  }, []);
  const [boxPosition, setBoxPosition] = useState(75);
  const slideBox = () => {
    setBoxPosition((prev) => parseInt(prev) + 76);
    console.log(boxPosition, "from fnc");
  };
  const checkForVictory = (item) => {
    console.log("from vu");
    if (item.isApple) {
      slideBox();
      const sound = new Audio("./src/audio/win.mp3");
      setTimeout(() => sound.play(), 50);
      console.log("won");
      setShouldBeAt((prev) => prev - 1);
      currentVictory > 1
        ? setCurrentVictory((prev) => prev * 2)
        : setCurrentVictory(50);
      setWinMoney(currentVictory);
      return;
    }

    const sound = new Audio("./src/audio/lose.mp3");
    setTimeout(() => sound.play(), 50);
    console.log("loseeee");
    setgameEnd(true);
    setArrayCard((prev) =>
      prev.map((rows, ind) =>
        rows.map((ite) => {
          return { ...ite, classes: "" };
        })
      )
    );
    setWinMoney(0);
    handelWithdrawModel(0);
  };

  const handelClick = (e, row, item) => {
    if (shouldBeAt == row && gameEnd == false) {
      setArrayCard((prev) =>
        prev.map((rows, ind) =>
          rows.map((ite) => {
            if (ind == shouldBeAt) {
              return { ...ite, classes: "" };
            }
            return ite;
          })
        )
      );

      checkForVictory(item);
    } else {
      console.log("wrong area start from below");
    }
  };

  const handelWithdraw = () => {
    if (gameEnd) return;
    handelWithdrawModel(currentVictory);
  };

  return (
    <div className="">
      <div className="text-center mb-3">
        $ <span className="text-2xl">{currentVictory}</span>
        <button
          disabled={currentVictory <= 0} // If currentVictory is 0 or less, disable the button
          onClick={handelWithdraw}
          className="btn-outline mb-5 ml-5"
        >
          Withdraw
        </button>
      </div>

      <div className="relative overflow-hidden ">
        {arrayCard &&
          arrayCard.map((itemRow, index) => {
            return (
              <div key={index} className="grid  grid-cols-5  overflow-hidden ">
                <div
                  className={`w-full h-full absolute`}
                  style={{ top: `-${boxPosition}px` }}
                >
                  {gameEnd == false ? (
                    <div className=" h-[75px] animate-pulse flex justify-around items-center relative top-[100%]   pointer-events-none ">
                      <span>
                        <i className="ri-arrow-up-line text-2xl animate-pulse text-green-500"></i>
                      </span>
                      <span>
                        <i className="ri-arrow-up-line text-2xl animate-pulse text-green-500"></i>
                      </span>
                      <span>
                        <i className="ri-arrow-up-line text-2xl animate-pulse text-green-500"></i>
                      </span>
                      <span>
                        <i className="ri-arrow-up-line text-2xl animate-pulse text-green-500"></i>
                      </span>
                      <span>
                        <i className="ri-arrow-up-line text-2xl animate-pulse text-green-500"></i>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {itemRow.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-15 h-17 rounded-md overflow-hidden m-1 border-1"
                    >
                      <img
                        onClick={(e) => handelClick(e, index, item)}
                        src={item.srcUrl}
                        alt="image"
                        className={`w-full h-full object-cover ${item.classes}`}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
      <div className="mt-5  text-center text-sm text-gray-500"></div>
    </div>
  );
}

export default FortuneOfAppleLogics;
