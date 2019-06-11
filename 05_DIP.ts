import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { Repository } from "./openclose/Repository";
import { User } from "./openclose/User";
import { MyService } from "./openclose/MyService";
import { RespositoryFactory } from "./Dependency inversion/RepositoryFactory";

export class DependencyInversion implements SOLIDPrinciple {
    Run() {
        const repo: Repository<User> = RespositoryFactory.Build();
        const service = new MyService(repo);
        service.DoSuff(new User());
    }
}
