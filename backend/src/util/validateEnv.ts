import { CleanedEnv } from "envalid";
import { str } from "envalid";

export default CleanedEnv(process.env,{
    MONGO_ACCESS:str(),
    port: port(),
})