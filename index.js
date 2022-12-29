require('dotenv').config();

const Server = require('./src/models/server');
const port = process.env.PORT
const server = new Server(port);

server.listen();