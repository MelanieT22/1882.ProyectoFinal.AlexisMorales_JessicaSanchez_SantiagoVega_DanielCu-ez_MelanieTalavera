
# Actividad de aprendizaje N.°3
# Desarrollo de una aplicación web interactiva

# Actividad

En esta actividad, los estudiantes trabajarán en grupos (5 PERSONAS) para desarrollar una aplicación web que permita la gestión de proyectos y empleados, implementando las operaciones básicas de un CRUD (crear, leer, actualizar, eliminar) para cada entidad. 
El almacenamiento de datos se realizará utilizando arrays en JavaScript.
Los requisitos de la actividad son los siguientes:

1.	Sistema de Gestión de Proyectos y Empleados: Un empleado puede trabajar en varios proyectos, y un proyecto puede tener múltiples empleados asignados.

# Integrantes:

- Alexis Damian Morales Cuasquer
- Jessica Estefania Sanchez Ugsiña
- Santiago David Vega Insuasti
- Daniel Enrique Cuñez Paguay
- Melanie Abigail Talavera Castillo

# Descipción de la Actividad

La actividad que se realizó se basa en desarrollar una aplicación web que gestione empleados, proyectos y las asignaciones de empleados a proyectos. Esta aplicación permite crear, editar y eliminar empleados y proyectos, así como asignar empleados a proyectos específicos, definiendo su rol en cada uno.

# Instrucciones para ejecutarlo:
  
*Pasos para Ejecutar:*

1. Abrir el archivo HTML principal (index.html) en su editor de código.
2. Una vez cargada la aplicación en el navegador, se podrá interactuar con las diferentes secciones:
- Gestión de Empleados: Agregar, editar o eliminar empleados.
- Gestión de Proyectos: Crear, modificar o eliminar proyectos.
- Asignación de Empleados a Proyectos: Asignar roles específicos a empleados en diversos proyectos.
- Información del Equipo: Visualizar detalles sobre los miembros del equipo.

  ![image](https://github.com/user-attachments/assets/7562b0b3-9ffb-4baf-9040-a766e9fe33cf)

Nota: Dado que los datos se almacenan en memoria durante la sesión, al recargar la página, toda la información ingresada se perderá. Para implementar persistencia de datos, sería necesario integrar una base de datos o en este caso utilizar almacenamiento local del navegador (localstorage).

# Funcionamiento de la Aplicación:

En primera lugar se tiene una pagina principal en el que al dar un click en el logo de la Universidad dirigiendonos a la pagina oficial, y ademas tiene un menu en el que podemos navegar a los distintos apartados pedidos en la actividad como:

1. CRUD empleados:

En la pagina principal al acceder al apartado de "CRUD Empleados", nos dirige a un registro donde mediante un formulario se accede los datos como:

- Nombre del empleado (input type text)
- Puesto (input type text)
- Salario (input type number)

Luego de llenarlo mediante el boton GUARDAR con su respectvo evento Listener configurado en el javascript, nos reflejara automaticamente mediante el uso de los arrays en la parte inferior todos los registros, ademas las listas de empleados, proyectos y asignaciones se muestran dinámicamente en la página, permitiendo la interacción mediante botones de edición y eliminación.

Como punto adicional como ya se menciona, las funciones JavaScript manejan eventos como el envío de formularios y clics en botones, actualizando los arreglos correspondientes y reflejando los cambios en la interfaz.

2. CRUD proyectos:

De la misma manera al acceder en su respectiva opcion en el menu, procedera a tener una funcionalidad similar, obviamente con campos diferentes como:

- Nombre del proyecto (input type text)
- Fecha de inicio (input type data)
- Fecha de finalizacion (input type data)

la funcionalida de botones es la misma que con el crud de empleados similares funciones en su javascript, de igual manera listandoles automaticamente en la parte inferior.

3. Acerca de nosostros:

Opcion en el menu que no muestra mas que la informacion de los integrantes del grupo de trabajo.

Cabe destacar que la pagina se ve bastante estilizada gracias a su CSS respectvo.


