import { SOLIDPrinciple } from "./SOLIDPrinciple";
import { SRPService } from "./Single responsability/SRPService";

export class SingleResponsability implements SOLIDPrinciple{
    Run() {
        const service = new SRPService();
        service.Process({"twitterHandler": "leomicheloni"});
    }
}
