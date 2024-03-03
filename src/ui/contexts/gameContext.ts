import React from "react";

import { Game } from "@/game";

interface GameContextType {
    game: Game
}

const GameContext = React.createContext<GameContextType>(undefined!);
GameContext.displayName = "GameContext";

export default GameContext;
