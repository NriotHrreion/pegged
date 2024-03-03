import { useContext } from "react";

import { Game } from "@/game";
import GameContext from "../contexts/gameContext";

export default function useGame(): Game {
    const { game } = useContext(GameContext);
    return game;
}
