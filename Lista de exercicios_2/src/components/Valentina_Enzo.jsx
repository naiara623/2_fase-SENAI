import React, { useState } from 'react'

function Valentina_Enzo() {
    const [altura, setAltura] = useState()
     
    function calk(){
        let enzo = 140
        let valentina = 150
        let anos = 0
    
        do{
            enzo +=3
            valentina +=2
            anos +=1
           
        }while(enzo < valentina)
              
        setAltura(anos)

    }
  return (
    <div className='oi'>
       <h2>Enzo e valentina</h2>
        <button onClick={calk}>calcular altura</button>
        <br />
     Enzo sera maior que valentina em: {altura}
    </div>
  )
}

export default Valentina_Enzo
