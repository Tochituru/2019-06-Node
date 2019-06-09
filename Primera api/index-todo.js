const express = require('express');
const cors = require('cors');

const todos = [
    { id: 1, nombre: 'Armar un .js', estado: true },
    { id: 2, nombre: 'Agregar la const express', estado: true },
    { id: 3, nombre: 'Agregar el objeto que quiero llamar', estado: true },
    { id: 4, nombre: 'Agregar la const app', estado: true },
    { id: 5, nombre: 'Agregarle el método', estado: true },
    { id: 6, nombre: 'Parámetro qeu sea el endpoint', estado: true },
    { id: 7, nombre: 'Agregar la respuesta', estado: true },
    { id: 8, nombre: 'Agregar el listener', estado: true },
]

const app = express();
app.use(cors());

app.get('/api/todos', function (req, res) {
    res.json(todos);
});


app.delete('/api/todos/:id', function (req, res) {
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    // for (let i = 0; i < todos.length; i++) {
    //     if (todos[i].id === id) {todos.splice(i, 1);}
    // }

    todos = todos.filter(t => todo.id !== id)
    res.json(todos);

})

app.listen(4000);
