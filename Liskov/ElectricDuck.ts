import { Animal } from "./Animal";

export class ElectricDuck extends Animal {
    public powerOn: boolean = false;
    move() {
        if (this.powerOn != true)
            return;
        console.log("Doing duck stuff until my battery dies...");
        super.move(15);
    }
}
