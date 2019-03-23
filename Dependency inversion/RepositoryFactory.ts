import { Repository } from "../openclose/Repository";
import { FakeRepository } from "../openclose/FakeRepository";
import { User } from "../openclose/User";

export class RespositoryFactory{
    Build() : Repository<User> {
        return new FakeRepository();
    }
}