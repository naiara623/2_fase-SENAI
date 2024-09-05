import { useState } from "react"
import './Media.css'
function Media() {
    const [resultado, setResultado] = useState()
    function CalcularMedia(){
        let nota1 = Number(prompt("Digite sua Primeira nota:"))
        let nota2 = Number(prompt("Digite sua segunda nota:"))
        let media = (nota1 + nota2)/2
        setResultado(media)
    }
  return (
    <div className="Media-container">
 <h2>Exercicio para calcular media de 2 numero</h2>
    <button onClick={CalcularMedia}>Calcular</button>
     <div>
     Média: {resultado}
     </div>
  
    </div>
  )
}

export default Media