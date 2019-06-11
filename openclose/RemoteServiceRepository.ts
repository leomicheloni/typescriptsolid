import { Repository } from "./Repository";
import { User } from "./User";

export class RemoteServiceRepository implements Repository<User>{
    Save<T>(entity: T) {
        console.log("Called remote Save method");
    }
    GetAll<T>(): T[] {
        console.log("Called remote GetAll method");
        return null;
    }
    GetById<T>(id: any): T {
        console.log("Called remote GetById method");
        return null;
    }
}