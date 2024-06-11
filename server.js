// const app = require('./app');
// const http = require('http');

import app from "./app.js";
import http from "http";

const port = 3000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
