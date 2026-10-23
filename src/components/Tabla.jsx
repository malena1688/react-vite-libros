function Tabla({ libros }) {
    return (
        <div>
            <h2>Listado de libros</h2>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro, index) => (
                        <tr key={index}>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.anio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabla
