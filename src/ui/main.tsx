import React, { useRef } from "react";

import GameContext from "./contexts/gameContext";
import { Game } from "@/game";

// Style
import "./style/layout.less";

const Main: React.FC = () => {
    const gameRef = useRef<Game>(new Game());

    return (
        <div className="main-container">
            <GameContext.Provider value={{ game: gameRef.current }}>

            </GameContext.Provider>
        </div>
    );
}

export default Main;
