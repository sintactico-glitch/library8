
# Modelo-Vista-Controlador #

[wikipedia.org](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador)

Modelo-vista-controlador (MVC) es un patrón de arquitectura del software que separa los datos y la lógica de negocio de una aplicación de su representación gráfica y del módulo encargado de gestionar los eventos y comunicaciones.

El patrón MVC se basa en la **reutilización de código y la separación de conceptos**, lo que facilita la tarea de desarrollo de aplicaciones y su mantenimiento.

## Descripción ##

- **Modelo:** es la representación de la información con la cual el sistema opera. Gestiona todos los accesos a esta información, también implementando los privilegios de acceso que se hayan descrito en las especificaciones de la aplicación (lógica de negocio). *Las peticiones de acceso o manipulación de datos llegan al modelo a través del controlador*

- **Controlador:** responde a eventos (usualmente acciones de los usuarios) y envia peticiones al modelo cuando se hace una solicitud sobre la información (por ejemplo, editar un registro de una base de datos o actualizar un carrito de compras). *El controlador también puede enviar sus comandos a la vista si se solicita u cambio en la forma en que se presentan los datos del modelo* (por ejemplo, ordenar los productos por precio o alfabéticamente)

- **Vista:** presenta el modelo (información y lógica de negocio) en un formato que permite que los usuarios interactuen con el sistema (UI). Necesita la información del modelo que representa como salida al usuario

> MVC pretende separar la capa visual gráfica de su correspondiente programación y acceso a datos.
