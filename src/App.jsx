import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { obtenerMascotas } from './utilitarios'

function App() {
  const valorInicialMascotas = obtenerMascotas();

  const [mascotas, setMascotas] = useState(valorInicialMascotas);
  const [filtroTexto, setFiltroTexto] = useState('');

  return (
    <>
      <Header 
        setFiltroTexto={setFiltroTexto} />
      <Main
        mascotas={mascotas}
        filtroTexto={filtroTexto} />
    </>
  )
}

export default App