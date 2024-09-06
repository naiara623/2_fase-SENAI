import { useState } from 'react'

function Notas_Parciais() {
   const [resultado, setResultado] = useState()

   function calculo(){
    let nota1 = Number(prompt("Informe sua primeira nota:")) 
    let nota2 = Number(prompt("Informe sua segunda nota:"))
    let calculo = (nota1 + nota2)/2

    if(calculo > 9 || calculo <= 10){
        setResultado("vc tirou um A")
       }
       else if(calculo > 7.5 || calculo <= 9){
         setResultado("vc tirou um B")
       }
       else if(calculo > 6 || calculo <= 7.5){
        setResultado("vc tirou um C")
       }
       else if(calculo > 4 || calculo <= 6){
         setResultado("vc tirou um D")
       }
       else if(calculo > 0 || calculo <= 4){
         setResultado("vc tirou um E")
       

   }

   }
  return (
    <div className='Notas'>
        <h2>Calcular minha nota</h2>
        <button onClick={calculo}>Calcular</button>

        <div>
            você tirou um: {resultado}
        </div>
      
    </div>
  )
}

export default Notas_Parciais
