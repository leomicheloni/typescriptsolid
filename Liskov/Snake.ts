import { Animal } from "./Animal";

export class Snake extends Animal {
    public move() {
        console.log("Slithering...");
        super.move(5);
    }
}
