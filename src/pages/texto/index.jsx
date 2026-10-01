import './index.scss';
import { useState } from 'react';

function Texto() {

      const[descricao, setdescricao] = useState('nada');
      const[descricao2,setdescricao2] = useState('nada');

      function pegarTexto(e){
        let valornovo = e.target.value
        setdescricao(valornovo)
      }

      function trocarTexto(){
        setdescricao2(descricao)
      }

      const[cor,setmudarcor] = useState('');

      function trocarCor(e){
        let cornova= e.target.value
        setmudarcor(cornova)
      }

    
  return (
    <div className="Texto" style={{backgroundColor:cor}}>
        <h1>{descricao2}</h1>
        <input onChange={pegarTexto} type='text' placeholder='digite algo'/> 
        <button onClick={trocarTexto}>Mudar</button>
         <h1>Troque a cor de fundo</h1>
        <input onChange={trocarCor} type='color'/>
    </div>
       
  );
}

export default Texto;
