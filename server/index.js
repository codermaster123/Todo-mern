import express from "express";
import cors from 'cors';
import Connection from "./Database/db.js";
import { fileURLToPath } from 'url';

import path,{dirname} from "path"
import route from './Routes/Route.js';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static("static"))
app.use("/",route)
const port=8080;
Connection();
app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,"static/index.html"))
});


app.listen(port,()=>{ console.log("server is starting")}); 