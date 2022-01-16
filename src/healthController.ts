import { Get, Route } from "tsoa";
import healthcheck from './healthcheck';

@Route("healthcheck")
class healthController {
    @Get("/")
    public async getMessage(): Promise<string> {
        return healthcheck();
    }    
};


export default healthController;