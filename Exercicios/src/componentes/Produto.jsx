import { useState } from "react"
import './Media.css'

function Produto() {
    const [resultado, setResultado] = useState()

    function desconto(){
        let valor = Number(prompt("Digite o Valor do Produto:"))
        let calculo
        let resultado

        if (valor > 20){
            calculo = valor * 0.3
            resultado = calculo + valor
            setResultado(`${resultado}`)
        }

        else if(valor < 20){
            calculo = valor * 0.45
            resultado = calculo + valor
            setResultado(`${resultado}`)
        }
    }
  return (
    <div className="Produto">
        <h2>Descubra o valor de sua venda</h2>
        <button onClick={desconto}>Calcular venda</button>
        <div>
            Valor final: {resultado}
        </div>
      
    </div>
  )
}

export default Produto
