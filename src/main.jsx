import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

import GameContext from "./contexts/GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <GameContext>
      <App />
    </GameContext>
  </HashRouter>
);
