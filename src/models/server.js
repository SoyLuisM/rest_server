const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config_mongo');

class Server{
    constructor(port = 3001){
        this.app = express();
        this.port = port;
        this.usersPath = '/api/users';

        //Connect DB
        this.connectar_DB();

        //Middlewares
        this.middlewares();
        
        //Rutas 
        this.routes();
    }

    async connectar_DB(){
        await dbConnection();
    }
    
    middlewares(){
        // CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() )
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