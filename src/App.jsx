import { useState } from 'react'
import Formulario from './components/Formulario'
import Tabla from './components/Tabla'

function App() {
  const [libros, setLibros] = useState([])
  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro])
  }

  return (
    <div>
      <Formulario agregarLibro={agregarLibro} />
      <Tabla libros={libros} />
    </div>
  )
}

export default App