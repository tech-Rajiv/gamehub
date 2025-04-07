import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";

import "./index.css";
import CoinStake from "./Games/CoinStake";
import FortuneOfApples from "./Games/FortuneOfApples";
import Aviator from "./Games/avator/Aviator";

function App() {
  return (
    <div className="bg-black w-full">
      <div className="bg-gray-950 max-w-5xl mx-auto min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mines" element={<CoinStake />} />
          <Route path="/fortuneofapples" element={<FortuneOfApples />} />
          <Route path="/aviator" element={<Aviator />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
