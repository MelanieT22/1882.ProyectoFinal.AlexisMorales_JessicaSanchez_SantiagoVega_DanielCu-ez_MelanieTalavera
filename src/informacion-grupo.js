const loadInfo = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="team-section">
            <h2>Nuestro equipo</h2>
            <p>Conoce a los integrantes de nuestro equipo.</p>
            <div class="team-container">
                <!-- Jefe de Proyecto -->
                <div class="team-card">
                    <img src="images/admin.jpg" alt="Jefe de Proyecto">
                    <p class="name">Alexis Morales</p>
                    <h3>Jefe de Proyecto</h3>
                    <p class="role">Líder</p>
                    <p class="desc">Responsable de la organización y dirección.</p>
                </div>
                <!-- Diseñador Web -->
                <div class="team-card">
                    <img src="images/designer.jpg" alt="Diseñador Web">
                    <p class="name">Jessica Sanchez</p>
                    <h3>Diseñador Web</h3>
                    <p class="role">UI/UX Designer</p>
                    <p class="desc">Encargado del diseño visual y la interfaz.</p>
                </div>
                <!-- Desarrollador Web -->
                <div class="team-card">
                    <img src="images/developer.jpg" alt="Desarrollador Web">
                    <p class="name">Melanie Talavera</p>
                    <h3>Desarrollador Web</h3>
                    <p class="role">Backend</p>
                    <p class="desc">Implementación de funcionalidades.</p>
                </div>
                <!-- Frontend -->
                <div class="team-card">
                    <img src="images/frontend.jpg" alt="Frontend">
                    <p class="name">Santiago Vega</p>
                    <h3>Frontend</h3>
                    <p class="role">Frontend Developer</p>
                    <p class="desc">Desarrollo de interfaces dinámicas.</p>
                </div>
                <!-- Backend -->
                <div class="team-card">
                    <img src="images/backend.jpg" alt="Backend">
                    <p class="name">Daniel Cuñez</p>
                    <h3>Backend</h3>
                    <p class="role">Backend Developer</p>
                    <p class="desc">Gestión de servidores y bases de datos.</p>
                </div>
            </div>
        </section>
    `;

    // Mostrar u ocultar la imagen adicional
    const imagen = document.getElementById('img2');
    if (imagen) {
        if (imagen.style.display === 'none') {
            imagen.style.display = 'block'; // Mostrar la imagen si está oculta
        } else {
            imagen.style.display = 'none'; // Ocultar la imagen si está visible
        }
    }
};
