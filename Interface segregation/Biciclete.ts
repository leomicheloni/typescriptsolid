import { Drivable } from "./Drivable";
import { Vehicle } from "./Vehicle";

export class Biciclete implements Vehicle {
    start() {
        throw new Error("Method not implemented.");
    }
    drive(distance: number): boolean {
        throw new Error("Method not implemented.");
    }
    getPosition(): number {
        throw new Error("Method not implemented.");
    }
    takeOff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    getAltitude(): number {
        throw new Error("Method not implemented.");
    }


}
