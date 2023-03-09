import express, {Request, Response, NextFunction} from "express";
import db_connection from "./config/database";
import routers from './routers/routers';

const app = express();

app.use(express.json());

async function server(){
    try {
        await db_connection();
    }  finally {
        app.use("/api", routers);
    }
}

server();

export default app;