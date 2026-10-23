# Registro de libros con React

## Descripción del proyecto

Aplicación desarrollada con React que permite introducir los datos de un libro mediante un formulario y mostrarlos en una tabla.

El objetivo del ejercicio es comprender cómo funcionan los componentes funcionales, el estado (`useState`) y las propiedades (`props`) en React.

## Tecnologías utilizadas

- React
- JavaScript y JSX
- Vite
- HTML y CSS
- React Developer Tools
- Visual Studio Code

## Estructura del proyecto

- `src/App.jsx`: componente principal que guarda la lista de libros.
- `src/components/Formulario.jsx`: formulario para introducir título, autor y año de publicación.
- `src/components/Tabla.jsx`: tabla que muestra los libros registrados.
- `src/index.css`: estilos globales de la aplicación.

## Funcionamiento

1. El usuario introduce el título, el autor y el año de publicación.
2. El componente `Formulario` guarda los valores mediante `useState`.
3. Al pulsar «Añadir libro», se crea un objeto con los datos.
4. El formulario envía ese objeto a `App` mediante una función recibida por props.
5. `App` añade el nuevo libro a su lista utilizando `setLibros`.
6. `App` pasa la lista actualizada a `Tabla` mediante props.
7. `Tabla` recorre la lista con `.map()` y muestra los libros.

## Conceptos aprendidos

### Componentes funcionales

Permiten dividir la aplicación en partes independientes y reutilizables.

### Estado con useState

Permite guardar datos que pueden cambiar durante la ejecución de la aplicación.

### Props

Permiten comunicar datos y funciones entre componentes.

### Eventos

- `onChange`: detecta cambios en los campos.
- `onSubmit`: gestiona el envío del formulario.
- `preventDefault()`: evita que el navegador recargue la página.

### Renderizado de listas

El método `.map()` permite recorrer los libros registrados y crear una fila de tabla para cada uno.

### Estilos CSS

Se han definido estilos globales en `src/index.css` para mejorar la presentación del formulario y la tabla.

## Comprobación con React Developer Tools

Se ha utilizado la pestaña Components para comprobar:

- Los estados `titulo`, `autor` y `anio` del componente `Formulario`.
- El estado `libros` del componente `App`.
- La prop `libros` recibida por el componente `Tabla`.

## Instalación y ejecución

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abrir en el navegador la dirección local que indique Vite.

## Compilación

Se ha comprobado la compilación del proyecto mediante:

```bash
npm run build
```

La compilación ha finalizado correctamente.

## Conclusión

Este ejercicio ha permitido comprender cómo organizar una aplicación React utilizando componentes funcionales y cómo compartir información mediante el estado y las props.

También se ha practicado la depuración con React Developer Tools y la comprobación del funcionamiento en el navegador.

**Nota:** el proyecto se ha creado con Vite en lugar de Create React App, manteniendo los conceptos de React solicitados en el ejercicio.