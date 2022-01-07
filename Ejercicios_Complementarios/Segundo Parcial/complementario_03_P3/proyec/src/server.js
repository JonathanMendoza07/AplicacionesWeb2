const express = require('express');
const cors = require('cors');

const { DBConection } = require('./database');

const response = {
    data:[],
    services:"All Services",
    arquitecture: "Monolithic"
}

class Server
{
    constructor(){
        this.app = express();
        this.port = process.env.PORT_DEV;

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
        this.app.use((req, res, next) => {
            response.data=[];
            next();
        })
    }

    routes(){
        this.app.use('/api/v1/adverts', require('./routes/advert.routes') );
        this.app.use('/api/v1/comunities', require('./routes/comunity.routes') );
        this.app.use('/api/v1/posts', require('./routes/post.routes') );        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`The server Monolithic is running in the port ${this.port}`);
        })
    }

}

module.exports = Server;