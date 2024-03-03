import { Timer } from "@/utils/timer";
import { Chess, ChessPosition } from "./chess";
import { Validator } from "@/utils/validator";

export const MAX_CHESSES_LIST_LENGTH = 33;
export type Chesses = Chess[];

export class Game {
    public timer: Timer;
    public hasBegun: boolean = false;

    // ## ## 00 01 02 ## ##
    // ## ## 03 04 05 ## ##
    // 06 07 08 09 10 11 12
    // 13 14 15 16 17 18 19
    // 20 21 22 23 24 25 26
    // ## ## 27 28 29 ## ##
    // ## ## 30 31 32 ## ##
    public chesses: Chesses = []; // indexes don't stand for the position

    public constructor() {
        this.timer = new Timer();

        this.init();
    }

    private init(): void {
        for(let i = 0; i < MAX_CHESSES_LIST_LENGTH; i++) {
            this.chesses.push(new Chess(i));
        }
    }

    public start(): void {
        this.hasBegun = true;
        this.timer.start();
    }

    public pause(): void {
        this.timer.stop();
    }

    public stop(): void {
        this.hasBegun = false;
        this.timer.reset();
    }

    public moveChess(from: ChessPosition, to: ChessPosition): void {
        const target = this.getChessByPosition(from);
        if(!target || this.getChessByPosition(to)) return;

        target.moveTo(to);

        /** @todo eat chess */

        var validator = new Validator(this.chesses);
        // validator.validate();
    }

    private getChessByPosition(position: ChessPosition): Chess | null {
        for(let chess of this.chesses) {
            if(chess.position === position) return chess;
        }
        return null;
    }
}
