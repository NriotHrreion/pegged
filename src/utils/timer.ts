export class Timer {
    private timer: NodeJS.Timer | null = null;
    private seconds: number = 0;
    
    public constructor(
        private readonly ms: number = 1000, // 1s
        private handler?: () => void
    ) { }

    private ticker(): void {
        this.seconds++;
        this.handler && this.handler();
    }

    public start(): void {
        this.timer = setInterval(() => this.ticker(), this.ms);
    }

    public stop(): void {
        this.timer && clearInterval(this.timer);
    }

    public reset(): void {
        this.stop();
        this.seconds = 0;
    }

    public getTimeString(): string {
        const seconds = this.seconds % 60;
        const minutes = (this.seconds - seconds) / 60;

        return `${this.timeToString(minutes)}:${this.timeToString(seconds)}`;
    }

    private timeToString(time: number): string {
        const str = time.toString();
        return time >= 10 ? str : "0"+ str;
    }
}
