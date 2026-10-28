import { useState } from "react";
import "./index.scss";
import Cabecalho from "../../components/cabecalho";

const PRECO_INGRESSO = 30;

export default function Ingressos() {
  const [qtd, setQtd] = useState(1);
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");
  const [total, setTotal] = useState('');
  
  function ing (){

   let  valor = qtd * PRECO_INGRESSO;
    if(meia===true){
      valor = valor /2;
    
    }
    if (cupom.toLocaleUpperCase() ==="CUPOM"){
      valor = valor * 0.5;    
    
    }
    if (cupom.toLocaleUpperCase() === "CUPOM20"){
        valor = valor * 0.8
    }
     setTotal(valor)
  }


  return (
    <div className="ingre">
      <Cabecalho/>
     
      
      <div className="card">

        <div className="ponta">
          <label>Quantidade:</label>
          <input
            type="number"  min="0"      value={qtd}  onChange={(e)=>setQtd(e.target.value)}      />
        </div>

        <div className="ponta">
          <label>Meia Entrada:</label>

          <input type="checkbox"  value={meia}    onChange={(e)=>setMeia(e.target.checked)}   />
        </div>

        <div className="ponta">
          <label>Cupom:</label>
          <input   type="text"  value={cupom}    onChange={(e)=>setCupom(e.target.value)}    />
        </div>

        <div className="ponta">
          <label></label>
          <button onClick={ing}>Calcular</button>
        </div>

        <p className="total">O total é R$ {total}</p>
      </div>
    </div>
  );
}