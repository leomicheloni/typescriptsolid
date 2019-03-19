import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { Animal } from "./Liskov/Animal";
import { Snake } from "./Liskov/Snake";
import { Horse } from "./Liskov/Horse";
import { ElectricDuck } from "./Liskov/ElectricDuck";

export class Liskov implements SOLIDPrinciple {
    Run() {

        const mike: Animal = new Animal("Generic Animal");
        const sam: Animal = new Snake("Sammy the Python");
        const tom: Animal = new Horse("Tommy the Palomino");
        const donald: Animal = new ElectricDuck("I'm an electric Duck called Donald");

        const animals: Array<Animal> = [sam, tom, mike, donald];

        animals.forEach(animal => {
            if (animal instanceof ElectricDuck) {
                animal.powerOn = true;
            }
            animal.move(10);
        });
    }
}
