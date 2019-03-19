import {Car} from './Car'
import {Helicopter} from './Interface segregation/Helicopter'
import { SOLIDPrinciple } from './SOLIDPrinciple';

export class InterfaceSegregation implements SOLIDPrinciple{
    Run() {
        throw new Error("Method not implemented.");
    }

}
