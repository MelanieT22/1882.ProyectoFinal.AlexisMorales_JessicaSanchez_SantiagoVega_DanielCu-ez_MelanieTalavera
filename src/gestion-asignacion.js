let asignaciones = [];
let editIndexAsignacion = null;

const loadAsignacion = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Asignación de Empleados a Proyectos</h2>
        <div id="formularioAsignacion">
            <h3 id="tituloFormularioAsignacion">Nueva Asignación</h3>
            <form onsubmit="guardarAsignacion(event)">
                <label>Empleado:</label>
                <select id="idEmpleado" required>
                    <option value="">--Selecciona un empleado--</option>
                </select>
                <label>Proyecto:</label>
                <select id="idProyecto" required>
                    <option value="">--Selecciona un proyecto--</option>
                </select>
                <input type="text" id="rolAsignacion" placeholder="Rol en el proyecto" required>
                <button type="submit" id="btnAsignacion">Guardar</button>
            </form>
        </div>
        <h3>Lista de Asignaciones</h3>
        <ul id="listaAsignaciones"></ul>
    `;
    const imagen = document.getElementById('img2');
    if (imagen.style.display === 'none') {
        imagen.style.display = 'none'; // Mostrar la imagen si está oculta
    } else {
        imagen.style.display = 'none'; // Ocultar la imagen si está visible
    }
    cargarSelects();
    renderAsignaciones();
};

const cargarSelects = () => {
    const selectEmpleado = document.getElementById('idEmpleado');
    const selectProyecto = document.getElementById('idProyecto');

    selectEmpleado.innerHTML = '<option value="">--Selecciona un empleado--</option>';
    selectProyecto.innerHTML = '<option value="">--Selecciona un proyecto--</option>';

    empleados.forEach(e => {
        const option = document.createElement('option');
        option.value = e.id;
        option.textContent = e.nombre;
        selectEmpleado.appendChild(option);
    });

    proyectos.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.nombre;
        selectProyecto.appendChild(option);
    });
};

const guardarAsignacion = (event) => {
    event.preventDefault();
    const idEmpleado = document.getElementById('idEmpleado').value;
    const idProyecto = document.getElementById('idProyecto').value;
    const rol = document.getElementById('rolAsignacion').value;

    if (!idEmpleado || !idProyecto || !rol.trim()) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (editIndexAsignacion !== null) {
        asignaciones[editIndexAsignacion] = { idEmpleado, idProyecto, rol };
        editIndexAsignacion = null;
    } else {
        asignaciones.push({ idEmpleado, idProyecto, rol });
    }

    resetFormularioAsignacion();
    renderAsignaciones();
};

const resetFormularioAsignacion = () => {
    document.getElementById('idEmpleado').value = "";
    document.getElementById('idProyecto').value = "";
    document.getElementById('rolAsignacion').value = "";
    document.getElementById('btnAsignacion').textContent = "Guardar";
    document.getElementById('tituloFormularioAsignacion').textContent = "Nueva Asignación";
};

const editarAsignacion = (index) => {
    const asignacion = asignaciones[index];
    document.getElementById('idEmpleado').value = asignacion.idEmpleado;
    document.getElementById('idProyecto').value = asignacion.idProyecto;
    document.getElementById('rolAsignacion').value = asignacion.rol;

    document.getElementById('btnAsignacion').textContent = "Actualizar";
    document.getElementById('tituloFormularioAsignacion').textContent = "Editar Asignación";
    editIndexAsignacion = index;
};

const renderAsignaciones = () => {
    const listaAsignaciones = document.getElementById('listaAsignaciones');
    listaAsignaciones.innerHTML = "";

    asignaciones.forEach((a, index) => {
        const empleado = empleados.find(e => e.id == a.idEmpleado).nombre;
        const proyecto = proyectos.find(p => p.id == a.idProyecto).nombre;

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${empleado} → ${proyecto}</h3>
            <p><strong>Rol:</strong> ${a.rol}</p>
            <div class="actions">
                <button class="edit" onclick="editarAsignacion(${index})">Editar</button>
                <button class="delete" onclick="eliminarAsignacion(${index})">Eliminar</button>
            </div>
        `;
        listaAsignaciones.appendChild(card);
    });
};

const eliminarAsignacion = (index) => {
    if (confirm("¿Seguro que quieres eliminar esta asignación?")) {
        asignaciones.splice(index, 1);
        renderAsignaciones();
    }
};
