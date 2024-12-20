let empleados = [];
let editIndexEmpleado = null;

const loadEmpleados = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Gestión de Empleados</h2>
        <div id="formularioEmpleado">
            <h3 id="tituloFormularioEmpleado">Agregar Nuevo Empleado</h3>
            <form onsubmit="guardarEmpleado(event)">
                <input type="text" id="nombreEmpleado" placeholder="Nombre del Empleado" required>
                <input type="text" id="puestoEmpleado" placeholder="Puesto" required>
                <input type="number" id="salarioEmpleado" placeholder="Salario" required>
                <button type="submit" id="btnEmpleado">Guardar</button>
            </form>
        </div>
        <h3>Lista de Empleados</h3>
        <ul id="listaEmpleados"></ul>
    `;
    const imagen = document.getElementById('img2');
    if (imagen.style.display === 'none') {
        imagen.style.display = 'none'; // Mostrar la imagen si está oculta
    } else {
        imagen.style.display = 'none'; // Ocultar la imagen si está visible
    }
    renderEmpleados();
};

const guardarEmpleado = (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombreEmpleado').value;
    const puesto = document.getElementById('puestoEmpleado').value;
    const salario = document.getElementById('salarioEmpleado').value;

    if (editIndexEmpleado !== null) {
        empleados[editIndexEmpleado] = { nombre, puesto, salario };
        editIndexEmpleado = null;
    } else {
        empleados.push({ id: Date.now(), nombre, puesto, salario });
    }
    resetFormularioEmpleado();
    renderEmpleados();
};

const resetFormularioEmpleado = () => {
    document.getElementById('nombreEmpleado').value = "";
    document.getElementById('puestoEmpleado').value = "";
    document.getElementById('salarioEmpleado').value = "";
    document.getElementById('btnEmpleado').textContent = "Guardar";
    document.getElementById('tituloFormularioEmpleado').textContent = "Agregar Nuevo Empleado";
};

const editarEmpleado = (index) => {
    const empleado = empleados[index];
    document.getElementById('nombreEmpleado').value = empleado.nombre;
    document.getElementById('puestoEmpleado').value = empleado.puesto;
    document.getElementById('salarioEmpleado').value = empleado.salario;

    document.getElementById('btnEmpleado').textContent = "Actualizar";
    document.getElementById('tituloFormularioEmpleado').textContent = "Editar Empleado";
    editIndexEmpleado = index;
};

const renderEmpleados = () => {
    const listaEmpleados = document.getElementById('listaEmpleados');
    listaEmpleados.innerHTML = "";

    empleados.forEach((empleado, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${empleado.nombre}</h3>
            <p><strong>ID:</strong> ${empleado.id}</p>
            <p><strong>Puesto:</strong> ${empleado.puesto}</p>
            <p><strong>Salario:</strong> $${empleado.salario}</p>
            <div class="actions">
                <button class="edit" onclick="editarEmpleado(${index})">Editar</button>
                <button class="delete" onclick="eliminarEmpleado(${index})">Eliminar</button>
            </div>
        `;
        listaEmpleados.appendChild(card);
    });
};

const eliminarEmpleado = (index) => {
    if (confirm("¿Seguro que quieres eliminar este empleado?")) {
        empleados.splice(index, 1);
        renderEmpleados();
    }
};
