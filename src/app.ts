import express from 'express';

//permite a comunicacao as variaveis de Ambiente
import 'dotenv/config';
import { router } from './routes';


//socket.io
import http from "http";
import {Server} from "socket.io";

//cors
import cors from "cors";



const app = express();

app.use(express.json());
app.use(cors());
app.use(router);



const serverHttp = http.createServer(app);
const io = new Server(serverHttp,{
    cors:{
        origin:"*"
    }
});

io.on("connection",socket =>{
    console.log(`Usuario conectado no socket ${socket.id}`)
})



app.get("/github", (req,res)=>{
    res.redirect(`http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
});

//Rota de callback  - Obrigatorio 
app.get("/signin/callback",(req,res)=>{
    const {code} = req.query;
    return res.json("Codigo de acesso: " + code);
})

//serverHttp.listen(4000, ()=>console.log(`Servidor Rodando na porta 4000`))

export {serverHttp, io}








