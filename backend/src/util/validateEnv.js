import { cleanEnv, port} from "envalid";
import { str } from "envalid";

export default cleanEnv(process.env,{
    MONGO_ACCESS:str(),
    PORT: port(),
})