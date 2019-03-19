import { RemoteService } from "./RemoteService";

export class Consumer{
    private remoteService: RemoteService;
    constructor(remoteService: RemoteService){
        this.remoteService = remoteService;
    }

    public DoSomething(): void{
        this.remoteService.Calculate();
    }
}