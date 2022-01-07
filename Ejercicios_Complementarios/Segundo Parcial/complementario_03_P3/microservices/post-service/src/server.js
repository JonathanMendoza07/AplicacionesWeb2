const express = require('express');
const cors = require('cors');

const { DBConection } = require('./database');
const conf = require('./database/config')

class Server
{
    constructor(){
        this.app = express();
        this.port = conf.PORT;

        this.conectDB();
        this.middleware();
        this.routes();
    }

    async conectDB(){
        await DBConection();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/v2/posts', require('./routes/post.routes') );     
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`The service posts is running in the port ${this.port}`);
        })
    }

}

module.exports = Server;