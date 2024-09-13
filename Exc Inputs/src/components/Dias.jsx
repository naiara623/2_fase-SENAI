import {useState} from 'react'

function Dias() {
    const [DiaSemana, setDiaSemana] = useState(0)
    const [inputValue, setInputValue] = useState("")

   function semana(){
    
      const dia = parseInt(inputValue)

    switch(dia){
      case 1:setDiaSemana('Hoje é Domingo')
        break;

        case 2:setDiaSemana('Hoje é Segunda')
            break;

            case 3:setDiaSemana('Hoje é Terça')
        break;

        case 4:setDiaSemana('Hoje é Quarta')
        break;

        case 5:setDiaSemana('Hoje é Quinta')
        break;

        case 6:setDiaSemana('Hoje é Sexta')
        break;

        case 7:setDiaSemana('Hoje é Sabado')
        break;

        default:setDiaSemana('Numero Invalido!')
    }
       
      
    }
     
  return (
    <div>
    <h1>Dia da semana</h1>
    Dia:<input type="Number"
    value={inputValue}
    onChange={(event) => setInputValue(event.target.value)}/>
    
    <button onClick={semana}>Que dia é hoje?</button>
    <br/>
    {DiaSemana}
  </div>
  )
}

export default Dias
