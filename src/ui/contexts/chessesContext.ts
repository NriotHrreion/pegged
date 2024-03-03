import React from "react";

import { Chesses } from "@/game";

interface ChessesContextType {
    chesses: Chesses
}

const ChessesContext = React.createContext<ChessesContextType>(undefined!);
ChessesContext.displayName = "ChessesContext";

export default ChessesContext;
