import React from "react";

import Board from "./Board";
import Game from "./Game";

// Style
import "../style/layout.less";

// Context
import GameContext from "./contexts/GameContext";

const Main: React.FC = () => {
    return (
        <div className="main-container">
            <GameContext.Provider value={{}}>
                <Board />
                <Game />
            </GameContext.Provider>
        </div>
    );
}

export default Main;
