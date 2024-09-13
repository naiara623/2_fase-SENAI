import { useState } from 'react'
import './App.css'
import Dias from './components/Dias'

function App() {
  // const [inputIdade, setInputIdade] = useState(0)
  // const  [maior, setMaior] = useState(false)
  // const [menor, setMenor] = useState(false)
  // function processarIdade(){
  //   if(inputIdade >= 18){
     
  //   setMaior(true)
  //     setMenor(false)
  //   }
  //   else{
  //     setMenor(true)
  //     setMaior(false)
  //   }
  // }

  return (
    <>
      {/* <h1>Inputs</h1>
      Idade:<input type="number" className='formulario'
      value={inputIdade}
      onChange={(event) => {setInputIdade(event.target.value)}}
      />
      <button onClick={processarIdade}>Processar Idade</button>
      {/* {inputIdade} */}
      {/* {maior && <Maior />} */}
      {/* {menor && <Menor /> */}
       
      <Dias />
      
      
          </>
  )
}

export default App
