import { Repository } from "./Repository";
import { User } from "./User";

export class MyService{
    private repository: Repository<User>;
    constructor(repository: Repository<User>){
        this.repository = repository;
    }

    public DoSuff(user: User){
        // do some business logic
        this.repository.Save(user);
    }
}