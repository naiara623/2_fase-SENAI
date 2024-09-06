import { useState } from "react"
import './Media.css' 

function Valor_X() {
        const [resultado, setResultado] = useState()
    
    
        function porquinho(){
            let real
            let valorProduto = Number(prompt("qual o valor do prodoto"))
            let porquinho1 = Number(prompt("quanto vc tem na popança EM 1 real"))
            let porquinho2 = Number(prompt("quanto vc tem na popança EM 50 centavos "))
            let porquinho3 = Number(prompt("quanto vc tem na popança EM 25 centavos"))
            let porquinho4 = Number(prompt("quanto vc tem na popança EM 10 centavos"))
            let porquinho5 = Number(prompt("quanto vc tem na popança EM 5 centavos"))
            let total = porquinho1 + (porquinho3 * 0.25) + (porquinho4 * 0.10) + (porquinho5 * 0.5) + (porquinho2 * 0.50)  
    
    
    if(total >= valorProduto){
    real = total - valorProduto
    setResultado(`vc pode compra o produto de ${valorProduto} vc tem ${real} na popança`)
    }else{
    real = total - valorProduto
    setResultado(`vc NÃO pode compra o produto de ${valorProduto} vc tem ${total} na popança faltam ${real}`)
    
    
    }     
             }
  return (
    <div className="Valor">
      <h2>Porquinho</h2>
        <button onClick={porquinho}>Calcular</button>
        <div>
       <br /> {resultado}
        </div>
    </div>
  )
}


export default Valor_X
