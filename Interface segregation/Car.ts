import {Drivable} from './Drivable'

export class Car implements Drivable {
    private _isRunning: boolean;
    private _distanceFromStart: number;

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    public start() {
        this._isRunning = true;
    }

    public drive(distance: number): boolean {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    }

    public getPosition(): number {
        return this._distanceFromStart;
    }
}