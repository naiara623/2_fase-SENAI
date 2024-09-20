// Foi feita um a pesquisa entre os habitantes de um a região e 
// coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
// um programa que leia os dados de 10 pessoas e informe: 
//  a maior e a menor altura encontrada; 
//  a média de altura das mulheres; 
//  a média de altura da população; 
//  o percentual de homens na população.

import React, { useState } from 'react'
import "./Exercicios.css"

function Pesquisas() {
    const [genero, setGenero] = useState
    const [altura, setAltura] = useState

    function calcular(){
      

    }

  return (
    <div className='oi'>
        <h2>Responda a pesquisa</h2>
 Genero:<input type="Number"
        value={genero}
        onChange={(event) => setGenero(event.target.value)}/>
 Atura:<input type="Number"
        value={altura}
        onChange={(event) => setAltura(event.target.value)}/>
        <button onClick={calcular}>Valor final</button>
        <br />
     Valor a ser pago:{valorFinal}
      
    </div>
  )
}

export default Pesquisas
