import {useState} from 'react'

function Positivo() {

    const [resultado, setResultado] = useState()

    function sla(){
        let num = Number(prompt("Digite um numero:"))

        if(num %2 === 0){
            setResultado(`O numero é Par e positivo`)
        }
        else{
            setResultado("O numero não é par ou positivo!")
        }
       
    }
  return (
    <div className='Media-container'>
        <h2>Um numero é Par e Positivo ao mesmo tempo?</h2>
        <button onClick={sla}>Verificar</button>
        <div>
        Número: {resultado}
        </div>
      
    </div>
  )
}

export default Positivo
