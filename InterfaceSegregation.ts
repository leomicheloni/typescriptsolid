import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { Biciclete } from "./Interface segregation/Biciclete";
import { Vehicle } from "./Interface segregation/Vehicle";

export class InterfaceSegregation implements SOLIDPrinciple{
    Run() {
        var vehicle : Vehicle = new Biciclete();
        vehicle.takeOff();
    }
}
