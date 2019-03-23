import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { MyService } from "./openclose/MyService";
import { FakeRepository } from "./openclose/FakeRepository";
import { Repository } from "./openclose/Repository";
import { User } from "./openclose/User";

export class OpenClose implements SOLIDPrinciple{
    Run() {
        var repo : Repository<User> = new FakeRepository();
        var service = new MyService(repo);
    }

}
