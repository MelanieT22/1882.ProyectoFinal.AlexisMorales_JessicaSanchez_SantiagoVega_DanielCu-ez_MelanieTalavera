let proyectos = [];
let editIndexProyecto = null;

const loadProyectos = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Gestión de Proyectos</h2>
        <div id="formularioProyecto">
            <h3 id="tituloFormularioProyecto">Agregar Nuevo Proyecto</h3>
            <form onsubmit="guardarProyecto(event)">
                <input type="text" id="nombreProyecto" placeholder="Nombre del Proyecto" required>
                <input type="date" id="fechaInicio" required>
                <input type="date" id="fechaFin" required>
                <button type="submit" id="btnProyecto">Guardar</button>
            </form>
        </div>
        <h3>Lista de Proyectos</h3>
        <ul id="listaProyectos"></ul>
        
    `;

    const imagen = document.getElementById('img2');
    if (imagen.style.display === 'none') {
        imagen.style.display = 'none'; // Mostrar la imagen si está oculta
    } else {
        imagen.style.display = 'none'; // Ocultar la imagen si está visible
    }

    renderProyectos();
};

const guardarProyecto = (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombreProyecto').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;

    if (editIndexProyecto !== null) {
        proyectos[editIndexProyecto] = { nombre, fechaInicio, fechaFin };
        editIndexProyecto = null;
    } else {
        proyectos.push({ id: Date.now(), nombre, fechaInicio, fechaFin });
    }
    resetFormularioProyecto();
    renderProyectos();
};

const resetFormularioProyecto = () => {
    document.getElementById('nombreProyecto').value = "";
    document.getElementById('fechaInicio').value = "";
    document.getElementById('fechaFin').value = "";
    document.getElementById('btnProyecto').textContent = "Guardar";
    document.getElementById('tituloFormularioProyecto').textContent = "Agregar Nuevo Proyecto";
};

const editarProyecto = (index) => {
    const proyecto = proyectos[index];
    document.getElementById('nombreProyecto').value = proyecto.nombre;
    document.getElementById('fechaInicio').value = proyecto.fechaInicio;
    document.getElementById('fechaFin').value = proyecto.fechaFin;

    document.getElementById('btnProyecto').textContent = "Actualizar";
    document.getElementById('tituloFormularioProyecto').textContent = "Editar Proyecto";
    editIndexProyecto = index;
};

const renderProyectos = () => {
    const listaProyectos = document.getElementById('listaProyectos');
    listaProyectos.innerHTML = "";

    proyectos.forEach((proyecto, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p><strong>ID:</strong> ${proyecto.id}</p>
            <p><strong>Fecha de Inicio:</strong> ${proyecto.fechaInicio}</p>
            <p><strong>Fecha de Fin:</strong> ${proyecto.fechaFin}</p>
            <div class="actions">
                <button class="edit" onclick="editarProyecto(${index})">Editar</button>
                <button class="delete" onclick="eliminarProyecto(${index})">Eliminar</button>
            </div>
        `;
        listaProyectos.appendChild(card);
    });
};