// const app = require('./app');
// const http = require('http');
import express from "express";
import app from "./app.js";
import http from "http";
import cors from "cors";
import rotaAluno from "./Routes/rotaAluno.js";

app.use(express.json());
app.use(cors());

// Configurar a aplicação para aceitar objetos aninhados
app.use(express.urlencoded({ extended: false }));
app.use("/consulta-dados", rotaAluno);

const port = 3000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
