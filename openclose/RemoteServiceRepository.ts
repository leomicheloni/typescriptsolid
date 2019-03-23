import { Repository } from "./Repository";
import { User } from "./User";

export class RemoteServiceRepository implements Repository<User>{
    Save<T>(entity: T) {
        throw new Error("Method not implemented.");
    }    GetAll<T>(): T[] {
        throw new Error("Method not implemented.");
    }
    GetById<T>(id: any): T {
        throw new Error("Method not implemented.");
    }

    
}