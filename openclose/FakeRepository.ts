import { User } from "./User";
import { Repository } from "./Repository";

export class FakeRepository implements Repository<User>{
    s: Array<User> = new Array<User>();

    Save<User>(entity: User) {
        this.s.push(new User );
    }

    GetAll<User>(): User[] {
        return new Array<User>();
    }

    GetById<User>(id: number): User {
        return new Array<User>()[0];
    }
}