import { useState } from 'react'
import "./Exercicios.css"

function Dinheiro() {
    const [valorFinal, setValorFinal] = useState()
    const [inputValue, setInputValue] = useState()

   function calcularDias(){

    let dias = parseInt(inputValue)
    let desconto = (25 / 100)
    let  total
    let valor
    let pagar

    if (dias <= 5) {

        total = (dias * 100)
        valor = (total * desconto)
        pagar = (total - valor)+150

        setValorFinal(pagar)
        
    }else if(dias >= 6 || dias <= 10){

        total = (dias * 100)
        valor = total * desconto
        pagar = (total - valor)+150

        setValorFinal(pagar)

    }else if(dias > 10){

    total = (dias * 100)
    valor = (total * desconto)
    pagar = (total - valor)+150

    setValorFinal(pagar)
    }
   }
        

    

  return (
    <div className='oi'>
        <h2>Quantos dias você ira ficar?</h2>
Dias Hospedado(a):<input type="Number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={calcularDias}>Valor final</button>
        <br />
     Valor a ser pago:{valorFinal}
      
    </div>
  )
}

export default Dinheiro
