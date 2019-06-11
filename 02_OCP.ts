import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { MyService } from "./openclose/MyService";
import { FakeRepository } from "./openclose/FakeRepository";
import { Repository } from "./openclose/Repository";
import { User } from "./openclose/User";
import { RemoteServiceRepository } from "./openclose/RemoteServiceRepository";

export class OpenClose implements SOLIDPrinciple {

    Run() {
        const repo: Repository<User> = new RemoteServiceRepository();// new FakeRepository();
        const service = new MyService(repo);
        service.DoSuff(null);
    }
}
