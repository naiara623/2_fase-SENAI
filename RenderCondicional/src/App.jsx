import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Pastel from './pages/Pastel'
import Brigadeiro from './pages/Brigadeiro'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState(<Home />)

function mostrarHome(){
  setPagina(<Home />)
}

  return (
    <>
    <nav>
      <button onClick={mostrarHome}>Home</button>
      <button onClick={ () => {setPagina(<Pastel />)} }>Pastel</button>
      <button onClick={ () => {setPagina(<Brigadeiro />)} }>Brigadeiro</button>
      <button onClick={ () => {setPagina(<Render />)} }>Render</button>
    </nav>
    {pagina}
      </>
  )
}

export default App
