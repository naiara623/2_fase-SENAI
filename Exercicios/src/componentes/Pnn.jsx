import { useState } from 'react'
import './Media.css'

function Pnn() {
    const [resultado, setResultado] = useState()
    function analise(){
        let numero = Number(prompt("Digite o numero a ser analisado:"))
        
        if(numero > 0){
       setResultado("Positivo")
        }

        else if(numero <0){
            setResultado("Negativo")
        }

        else if(numero === 0){
            setResultado("Nulo")
        }
    
    }
  return (
    <div className='Media-container'>
      <h2>Numero positivo, negativo, ou nulo?</h2>
      <button onClick={analise}>Analisar</button>
      <div>
        o número é: {resultado}
      </div>
    </div>
  )
}

export default Pnn
