import rotaAluno from "./Routes/rotaAluno.js";
import express from "express";
import bodyParser from "body-parser";
// const bodyParser = require('body-parser');
// const os = require('os');
import os from "os";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use("/consulta-dados", rotaAluno);

app.get('/', (req, res) => {
    return res
    .status(200)
    .json({
        status: true,
        mensagem: "aplicação viva!"
    });
});


app.get('/liveness', (req, res) => {
    // retorna se a aplicação está viva (disponivel)
    return res
    .status(200)
    .json({
        status: true,
        message: "Meu servidor funciona!",
        path: process.cwd(),
        gid: "",
        uid: "",

    });
});
app.get('/readiness', (req, res) => {
    // retorna se a aplicaçãoestá pronta (todos os componenntes disponiveis para executar funções de suas responsb.)
    return res
    .status(200)
    .json({
        status: true,
        mensagem: "Minha aplicação está pronta!",
        platform: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir(),
        
    });
});

export default app;