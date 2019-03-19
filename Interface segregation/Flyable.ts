export interface Flyable {   
    start(): void;
    takeOff(): void;
    land():void;
    getAltitude(): number;
}
