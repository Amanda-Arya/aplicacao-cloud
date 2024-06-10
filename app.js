import rotaAluno from "./Routes/rotaAluno.js";
import express from "express";
import bodyParser from "body-parser";
// const bodyParser = require('body-parser');
// const os = require('os');
import os from "os";

const app = express();

app.get('/', (req, res) => {
    return res
    .status(200)
    .json({
        status: true,
        mensagem: "ok"
    });
});


app.get('/liveness', (req, res) => {
    // retorna se a aplicação está viva (disponivel)
    return res
    .status(200)
    .json({
        status: true,
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
        mensagem: "ok",
        os: os.platform(),
        
    });
});


export default app;