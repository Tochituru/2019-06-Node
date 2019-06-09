fetch('http://localhost:4000/api/todos')
    .then(res => res.json())
    .then(listaDeTareas => {
        const lis = listaDeTareas.map(t => `<li id='${t.id}'>${t.nombre}<span>¿Completado? ${t.estado}</span><button>Eliminar</button></li>`)

        document.querySelector('ul').innerHTML = lis.join('')
        document.querySelectorAll('button')
        .forEach(button => button.onclick = eliminar)
    });

    function eliminar(e) {
        console.log(e.target.parent.id);
        const id = e.target.parent.id;
        fetch(`http://localhost:400/api/todos${id}`,
        {method: 'delete'})
        console.log('Funciona')
    }