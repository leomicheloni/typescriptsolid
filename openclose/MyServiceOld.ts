import { Repository } from "./Repository";
import { User } from "./User";
import { FakeRepository } from "./FakeRepository";

export class MyServiceOld {

    private repository: Repository<User> = new FakeRepository();

    public DoSuff(user: User) {
        // do some business logic
        this.repository.Save(user);
    }
}