# Proyecto final E-Commerce para el curso de React JS de Coder House

Este proyecto se realizó durante el curso de React del 7 de noviembre al 21 de diciembre de 2022. El proyecto incluye los puntos mínimos requeridos en la documentación:

**● Inicio:** Al momento de ingresar a la app en la ruta base ‘/’
**●** Visualizar -como mínimo- un set de productos disponibles para la
compra.
**●** Contar con algún acceso visible a la vista de carrito que debe alojarse
en el route /cart.
**●** Acceder a un menú desplegable que contendrá las categorías. Al
clickear en una, debe navegar a la lista de productos de la misma
mediante un route /categories/:categoryId. Éste invocará la misma
vista que el home, pero visualizando sólamente productos de esa
categoría.

**● Flow:** Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde
id es el id del item (generado por firebase), y ver la descripción del producto (
foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no
existe en firebase, debemos responder un mensaje adecuado que indique
algo relacionado a que el producto no existe.
**● Firebase:**
**●** Implementar al menos dos colecciones:
**■ items:** catálogo completo
**●** Link para foto (puede almacenarse de modo estático en
la página en una subruta /images/:itemid )
**●** Precio unitario
**●** Descripción (sólo se ve en detalle)
**●** Categoria (id a mano para versión estática, o id de
firebase para versión dinámica -opcional-)
**■** orders: las órdenes generadas, que deben incluir los
productos, descripciones y los precios al momento de la
compra.
**●** Las órdenes deben poder tener items surtidos, cada uno
con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
**●** id, items, fecha, estado ( por defecto en ‘generada’)
**●** El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos
unidades y un ítem con una unidad, debe decir ‘tres’).
**● Checkout mínimo:**
**○** Items con sus cantidades
**○** Total de la orden
**○** Input para nombre, apellido y teléfono
**○** Input para email y lógica de repetir el email 2 veces (a excepción de
que realicen el desafío extra de auth, en ese caso no sería necesario)
**●** Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
**●** La navegabilidad debe ocurrir utilizando el router, y no href’s o location.
**●** Por cada librería pública extra que utilices, deberás incluir en algún archivo ellink al proyecto, y una justificación de por qué agrega valor.
**● Readme.md:** El archivo debe estar en el root del proyecto para dar una breve
introducción acerca de su proyecto y qué ideas o enfoque eligió para el
mismo. Si incluyó dependencias extra por npm (por fuera de las trabajadas en
clase), aparte debe hacer un resumen explicando sus decisiones.

## Componentes extra
Incluí la vista para las ordenes realizadas, la cual muestra una lista de todas las ordenes obtenidas de Firestore. El Id de cada orden, es un Link al detalle de cada orden, similar a la vista de detalle de un producto. Esta vista de detalle de la orden, también cuenta con validación para saber si la orden existe o no; de no existir, muestra un **Danger Alert** que indica que esa orden no existe.

## Modulos adicionales de terceros
Además del módulo de Firebase necesario para el proyecto, se instalaron los módulos **React-Bootstrap** y **Bootstrap** para comodidad del acomodo y diseño del sitio.

## Aclaraciones adicionales
Se agruparon componentes comunes en la carpeta **elements**, como el componentes de loading, la navbar, el cartwidget y el botón generado en las primeras clases.

Las vistas se agruparon en la carpeta **containers**.

El resto de los componentes, se agruparon por carpetas con nombres relacionados a su vista.

## Base de datos
Se cargaron 15 productos en total, 5 para cada categoría. Las categorías son **"Celulares"**, **"Tablets"** y **"Accesorios"**.


