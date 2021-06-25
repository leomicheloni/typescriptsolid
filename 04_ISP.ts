import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { Bicycle } from "./Interface segregation/Bicycle";
import { Vehicle } from "./Interface segregation/Vehicle";

export class InterfaceSegregation implements SOLIDPrinciple{
    Run() {
        const vehicle : Vehicle = new Bicycle();
        vehicle.takeOff();
    }
}
