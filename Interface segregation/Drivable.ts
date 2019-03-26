export interface Drivable {
    start(): void;
    drive(distance: number): boolean;
    getPosition(): number;
}
