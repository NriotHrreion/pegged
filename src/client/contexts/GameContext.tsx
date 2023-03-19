import React from "react";

interface GameContextType {

}

const GameContext = React.createContext<GameContextType>({

});
GameContext.displayName = "GameContext";

export default GameContext;
