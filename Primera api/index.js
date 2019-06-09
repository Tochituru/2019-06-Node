const express = require('express');
const cors = require('cors');

//hay que bajarlo en cada proyecto, no es automático
//te permite crear un servidor de express

//Podemos crear la variable local para que cualquier get lo tome
const users = [
    { nombre: '1', edad: 30 },
    { nombre: '2', edad: 20 },
    { nombre: '3', edad: 40 },
]


const app = express();
app.use(cors());

//el get es el método de http, si quiero recibir, agregar o eliminar algo
//app.METHOD
//determina qué hace la persona de afuera en el servidor;
//en el ejemplo de las pelis es api.tmdb.com/3/movies/popular
//la primera parte es el dominio, todo pasando la barra es parte del end point con la que le pido algo




app.get('/', function (req, res) {
    res.send('¡hola mundo!');
});

app.get('/user', function (req, res) {
    res.send({
        nombre: 'Luficer',
        edad: '+9000',
    })
})

app.get('/users', function (req, res) {
        res.send({users})
})

app.listen(4000);