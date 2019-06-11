import { Drivable } from "./Drivable";
import { Vehicle } from "./Vehicle";

export class Bicycle implements Vehicle {
    takeOff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    getAltitude(): number {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }    
    drive(distance: number): boolean {
        throw new Error("Method not implemented.");
    }
    getPosition(): number {
        throw new Error("Method not implemented.");
    }
}