import React from 'react'

function Salario() {
    const [resultado, setResultado] = userState()

    function verificar(){

        let Salario = Number(prompt("Digite o Valor do salario:"))
        let Prestacao = Number(prompt("Digite o Valor do Imprestimo:"))
        let Calculo1, calculo2
        Calculo1 = 30/100
        calculo2 = Salario * Calculo1

        if(Prestacao > calculo2){
            setResultado('Você não pode fazer um emprestimo')
        }

        else if(Prestacao < calculo2){
            setResultado('emprestimo autorizado')
        }
    }
  return (
    <div className='Media-container'>
      <h2>Informe o salario e o valor do impréstimo</h2>
      <button onClick={verificar}>Verificação</button>
      Emprestimo: {resultado}
    </div>
  )
}

export default Salario
