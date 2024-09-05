import { useState } from "react"

function Exemplo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
        setResultado(resultado + 1)
    }

    function diminuir(){
        setResultado(resultado - 1)
    }
  return (
    <div>
      <button onClick={aumentar}>+</button>
      {resultado}
      <button onClick={diminuir}>-</button>
    </div>
  )
}

export default Exemplo
