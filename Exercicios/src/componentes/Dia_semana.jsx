import { useState} from 'react'

function Dia_semana() {
    const [DiaSemana, setDia] = useState()
   function diaSemana(){
    
    switch(DiaSemana){

        case 1:
            setDia('Hoje é Domingo')
            break

            case 2:
                setDia('Hoje é Segunda')
                break

                case 3:
            setDia('Hoje é Terça')
            break

            case 4:
            setDia('Hoje é Quarta')
            break

            case 5:
            setDia('Hoje é Quinta')
            break

            case 6:
            setDia('Hoje é Sexta')
            break

            case 7:
            setDia('Hoje é Sabado')
            break

            default:
                setDia('Numero Invalido!')
            

    }
    }
  return (
    <div>
      <h1>Dia da semana</h1>
      Dia:<input type="text" className='formulario'/>
      <button onClick={diaSemana}>Que dia é hoje?</button>
      {DiaSemana}
    </div>
  )
}

export default Dia_semana
