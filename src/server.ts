import express, {Request, Response, NextFunction} from "express";
import routers from './routers/routers';

const app = express();

app.use(express.json());

async function server(){
    try {
        
    } catch (error) {
        
    } finally {
        app.use("/api", routers);
    }
}

app.listen(5000, () => {
    console.log("server listen on 5000 port");
    
})