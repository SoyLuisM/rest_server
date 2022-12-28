const express = require('express');

class Server{
    constructor(port = 3001){
        this.app = express();
        this.port = port;

        //Middlewares
        this.middlewares();
        //Rutas 
        this.routes();
    }

    middlewares(){
        //directorio publio
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/hello', (req, res) => {
            res.send('Hello World!')
          })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;