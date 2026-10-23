import { useState } from 'react'

function Formulario({ agregarLibro }) {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [anio, setAnio] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const libro = {
            titulo: titulo,
            autor: autor,
            anio: anio
        }

        console.log(libro)
        agregarLibro(libro)
    }

    return (
        <div>
            <h2>Registro de libros</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Título del libro:</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />

                <label htmlFor="autor">Autor del libro:</label>
                <input
                    type="text"
                    id="autor"
                    name="autor"
                    value={autor}
                    onChange={(event) => setAutor(event.target.value)}
                />

                <label htmlFor="anio">Año de publicación:</label>
                <input
                    type="number"
                    id="anio"
                    name="anio"
                    value={anio}
                    onChange={(event) => setAnio(event.target.value)}
                />

                <button type="submit">Añadir libro</button>
            </form>
        </div>
    )
}

export default Formulario