# Massimo Dutti - Star Wars frontend

Proyecto básico que consume la API de Star Wars (swapi.dev) con el diseño de Massimo Dutti

Este proyecto fue generado con Angular CLI versión 10.0.4.

## Estructura del proyecto

Este proyecto pese a ser un proyecto de tamaño pequeño esta estructura en una estructura modular respetando el principio de responsabilidad única haciendo uso de componentes stateful, componetes stateless y servicios con la lógica de negocio.

Todos los componentes del proyecto hacen uso de la estrategia de detección de cambios OnPush para optimizar el rendimiento de la aplicación.

El proyecto esta dividido en diversos módulos que se cargan bajo demanda haciendo uso de la técnica lazy loading para garantizar el correcto rendimiento de la aplicación así como su escalabilidad.

## Control de acceso

Se han implementado dos guards de acceso. Uno para permitir el acceso únicamente a usuarios registrados y otro para permitir el acceso a usuarios con el rol administrador (Desde el registro es posible crear usuarios con ambos diversos roles para probar esta funcionalidad).

Con tal de poder un diseño lo más fiel posible a la web de Massimo Dutti no se ha habilitado el guard de acceso en el listado de naves (Si en el resto de paginas del portal)

## Diseño

El diseño del portal esta inspirado en la tienda online de Massimo Dutti (http://massimodutti.com).

Se ha importado en el proyecto la tipografía Grotesque.

Aprovechando las ventajas que ofrece SCSS el proyecto dispone de estilos globales, variables de color y tamaño además de una capa de personalización global de Angular Material creando un tema personalizado para este proyecto.

## Sistema de autentificacion

Para realizar una implementación lo más próxima a la realidad se ha creado un API REST con el sistema del login y registro.

Esta API esta creada en JavaScript haciendo uso de la librería Express y su código esta disponible en el Github (https://github.com/scarrascoalvarez/md-starwars-backend).

## Formularios

Para la creación de los formularios de registro y login se ha optado por hacer uso de formularios reactivos que permitir realizar validaciones en caliente. Se han creado validares personalizados (contraseña, email).

## Componentes genericos

Haciendo uso de las ventajas de ofrece Angular se han creado componentes genéricos y reutilizables como el dialog de confirmación o la estructura genérica del dialogo (usado tanto en el dialog de confirmación como en el dialog de registro).

## Diseño responsvie

Se ha realiza una adaptación básica para que el portal sea funcional tanto en escritorio como en dispositivos móviles (Prueba el portal en ambos dispositivos)

## Angular Material

Se ha hecho uso de Angular Material para agilizar el desarrollo haciendo uso de sus componentes como por ejemplos los elementos de formulario o los dialogs.

## Angular Animations y SCSS

Con el fin de demostrar el conocimiento en maquetación y no solo utilizar componentes de librerías ya creados también se han creado personalizados en SCSS (Como por ejemplo la Sidecar) y se ha combinado con las animaciones de Angular Animations.

## Sistema de cache

Se ha realiza una implementación simple pero efectiva de un sistema de cache haciendo uso de RxJS

## Interceptores

Se han implementado 2 interceptores de peticiones HTTP.

El primero tiene como responsabilidad mostrar de forma automática un spinner global cuando se están realizando peticiones. Este interceptor esta preparado para modificar su comportamiento y no mostrar en el spinner global en caso de que no se desee (Por ejemplo durante el scroll infinito).

También se ha hecho una implementación básica de un interceptor de errores HTTP que redirigue a una página de error básica.

## Listado de naves

Se ha implementado un scroll infinito en el listado de naves. También se ha implementado una animación con Angular Animations en la carga del listado.

## Detallo de nave

En el detalle se ha hecho uso del operador ForkJoin para realizar llamadas simultáneas y obtener la información de las películas relacionadas con la nave estelar.

## Test unitarios

Se ha realizado una implementación básica de test unitario obteniendo una cobertura por encima del 90%.

## Lint

El proyecto cumple todas las reglas del lint configuradas.

## Servidor de desarrollo

Ejecute ng-serve para un servidor de desarrollo. Vaya a http://localhost:4200/. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Compilación

Ejecute ng-build para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio dist/. Usa la marca --prod para una compilación de producción.

## Running unit tests

Ejecutar ng-test para ejecutar las pruebas unitarias a través de Karma.