export interface Vehicle {
    start(): void;
    drive(distance: number): boolean;
    getPosition(): number;
    start(): void;
    takeOff(): void;
    land(): void;
    getAltitude(): number;
}
