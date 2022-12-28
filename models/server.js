const express = require('express');
const cors = require('cors');

class Server{
    constructor(port = 3001){
        this.app = express();
        this.port = port;
        this.usersPath = '/api/users';
        //Middlewares
        this.middlewares();
        
        //Rutas 
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors())
        //directorio publio
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersPath,require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;