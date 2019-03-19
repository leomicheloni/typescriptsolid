import { Animal } from "./Animal";

export class ElectricDuck extends Animal {
    public powerOn: boolean = false;
    move() {
        if (!this.powerOn)
            return;
        console.log("Galloping...");
        super.move(15);
    }
}
