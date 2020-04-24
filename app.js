const express = require('express');
const app = express();
/** Llamando el paquete hbs*/
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

/** Utilizando el paquete HBS de Express*/
hbs.registerPartials(__dirname+ '/views/parciales');
app.set('view engine', 'hbs');


/* Al usar express no es necesario especificar que tipo de respuesta se manejerá 
    res.writeHead(200, {'Content-type':'application/json'})
*/
/*
app.get('/', (req,res) =>{
    let salida={
        nombre :'Arnaldo',
        edad:32,
        url: req.url
    }
    res.send(salida);
    //res.send('Hola Mundo desde express');
});
*/
app.get('/', (req,res) =>{

    res.render('home', {
        nombre: 'arnAldo',
    });
});
app.get('/about', (req,res) =>{

    res.render('about', {
                
    });
});

app.listen(port, ()=>{
    console.log(`Escuchando desde el puerto ${port}`);
} );

/******** La carpeta public será visible para todos ********/