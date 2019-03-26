import { Flyable } from './Flyable'
import { FlyStatus } from './FlyStatus'

export class Helicopter implements Flyable {
    private altitude: number = 0;
    private status: FlyStatus = FlyStatus.Landed;

    start(): void {
        this.status = FlyStatus.TakingOff;
    }

    takeOff(): void {
        this.status = FlyStatus.Flying;
    }

    land(): void {
        this.status = FlyStatus.Landed;
    }

    getStatus() {
        return this.status;
    }

    getAltitude(): number {
        return this.altitude;
    }

}