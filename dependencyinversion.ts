import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { FakeRepository } from "./openclose/FakeRepository";
import { Repository } from "./openclose/Repository";
import { User } from "./openclose/User";
import { MyService } from "./openclose/MyService";
import { RespositoryFactory } from "./Dependency inversion/RepositoryFactory";

export class DependencyInversion implements SOLIDPrinciple{
    Run() {
        var repo : Repository<User> = RespositoryFactory.Build();        
        var service = new MyService(repo);
        service.DoSuff(new User());
    }
}
