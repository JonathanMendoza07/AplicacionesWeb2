const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const cron = require("node-cron");

const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

cron.schedule("0 9 * * *", // se ejecutara todos los dias a las 9am
    async () => {
        const html = await axios.get("https://www.eltelegrafo.com.ec/")//Página a la cual se le extraera la información 
        const $ = cheerio.load(html.data); //filtramos solo los datos del html
        const titulos =$(".story-heading");//Definimos lo que vamos a usar, en este caso los titulos de las noticias

        let arregloNoticias=[];
        titulos.each((index, element)=>{
            const Noticia={
                titulo:$(element).text().toString(),
                enlace:$(element).attr("href")
            }
            arregloNoticias=[...arregloNoticias, Noticia];
        })
        Noticias.create(arregloNoticias);
    })