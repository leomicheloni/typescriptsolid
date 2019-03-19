import { Animal } from "./Animal";

export class Horse extends Animal {
    public move() {
        console.log("Galloping...");
        super.move(45);
    }
}
