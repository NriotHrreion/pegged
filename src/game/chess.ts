import { Utils } from "@/utils/utils";
import { MAX_CHESSES_LIST_LENGTH } from "./game";

export enum BoardArea {
    TOP, CENTER, BOTTOM, NONE
}

const EATEN_POSITION = -1;
export type ChessPosition = number; // 0~32 -> position, -1 -> has been eaten

export interface IChess {
    position: ChessPosition
}

export class Chess implements IChess {
    public position: ChessPosition;

    public constructor(position: ChessPosition) {
        if(!Chess.isPositionValid(position)) throw new Error("Invalid chess position.");

        this.position = position;
    }

    public kill(): void {
        this.moveTo(EATEN_POSITION);
    }

    public moveTo(position: ChessPosition): void {
        if(!Chess.isPositionValid(position)) return;

        this.position = position;
    }

    public static getArea(position: ChessPosition): BoardArea {
        if(!Chess.isPositionVisible(position)) return BoardArea.NONE;
        if(position >= 0 && position <= 5) return BoardArea.TOP;
        if(position >= 6 && position <= 26) return BoardArea.CENTER;
        if(position >= 27 && position <= 32) return BoardArea.BOTTOM;

        return BoardArea.NONE; // impossible
    }

    public static isPositionValid(position: ChessPosition): boolean {
        return !Utils.isFloat(position) && position >= EATEN_POSITION && position < MAX_CHESSES_LIST_LENGTH;
    }

    public static isPositionVisible(position: ChessPosition): boolean {
        return position !== EATEN_POSITION;
    }
}
