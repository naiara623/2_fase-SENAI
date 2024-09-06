import { useState } from 'react'

function UberStar() {
    const [resultado, setResultado] = useState()

    function uber(){

        let distancia = Number(prompt("Digite a distancia:"))
        let velocidade = 300000
        let calculo
        let calculo1

        calculo = (distancia * velocidade)

        if(calculo > 31104000){
            calculo1 = (((((calculo / 60)/ 60)/24)/30)/12)
            setResultado(`${calculo1.toFixed(2)} Ano`)
        }
        else if(calculo > 2592000){
            calculo1 = ((((calculo / 60)/ 60)/24)/30)
            setResultado(`${calculo1.toFixed(2)} Mês`)
        }
        else if(calculo > 86400){
            calculo1 = (((calculo / 60)/ 60)/24)
            setResultado(`${calculo1.toFixed(2)} Dias`)
         }
         else if(calculo > 3600){
             calculo1 = ((calculo / 60)/ 60)
             setResultado(`${calculo1.toFixed(2)} Horas`)
          }
         else if(calculo > 60){
             calculo1 = (calculo / 60)
             setResultado(`${calculo1.toFixed(2)} Minutos`)
          }
         else if(calculo > 0){
            setResultado(`${calculo1.toFixed(2)} Segundos`)
         }
        

    }
  return (
    <div className="UberStar">
        <h2>Calcular distancia</h2>
        <button onClick={uber}>Calcular</button>
        <div>
        A viajem vai demorar:
       <br /> {resultado}
        </div>
      
    </div>
  )
}

export default UberStar
