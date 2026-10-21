import './index.scss';
import { useState } from 'react';
import Cabecalho from "../../components/cabecalho/index.jsx";

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

      const[n1, setN1] = useState('')
      const[n2,setN2] = useState('')
      const[resp,setResp] = useState('')

        function somar() {
            let soma = Number(n1) + Number(n2)
            setResp(soma);

        }

        function subtrair() {
            let soma = Number(n1) - Number(n2)
            setResp(soma);

        }

        function dividir() {
            let soma = Number(n1) / Number(n2)
            setResp(soma);

        }

        function multiplicar() {
            let soma = Number(n1) * Number(n2)
            setResp(soma);

        }
    
  return (
    <div className="Texto" style={{backgroundColor:cor}}>
       <Cabecalho />
        <h1>{descricao2}</h1>
        <input onChange={pegarTexto} type='text' placeholder='digite algo'/> 
        <button onClick={trocarTexto}>Mudar</button>
         <h1>Troque a cor de fundo</h1>
        <input onChange={trocarCor} type='color'/>
          <section className="section">
                <div className="c">

                    <h2>Calculadora</h2>

                    <div className="inputs">

                       <input type="text" value={n1} onChange={(e)=>setN1(e.target.value)} />
                       <input type="text" value={n2} onChange={(e)=>setN2(e.target.value)} />
                       <div>=</div>
                       
                       <div>{resp}</div>
                         
                       <button onClick={somar}>Somar</button>
                       <button onClick={subtrair}>subtrair</button>
                       <button onClick={dividir}>dividir</button>
                       <button onClick={multiplicar}>multiplicar</button>
                </div>
                </div>
               </section>

    </div>
       
  );
}

export default Texto;
