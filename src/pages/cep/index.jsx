import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import '../../components/cabecalho'
import Cabecalho from '../../components/cabecalho';
import { Link } from 'react-router-dom';

export default function Cep() {
    const [cep, setcep] = useState('');
    const [endereco, setEndereco] = useState();
   async function buscarCep() { 
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        
        let resp =   await axios.get(url);
        let dados = resp.data;
        let msg = dados.logradouro + " - " + dados.bairro + " - " + dados.localidade + " - " + dados.uf;
        setEndereco(msg);

     }
  return (
    <div className="cep">
      <Cabecalho titulo="Cep" />
      <div className='container'>
        
        
      <input type="text"  value={cep} onChange={(e)=>setcep(e.target.value)}/>
      <button onClick={buscarCep}>Buscar</button>
      <p> {endereco}</p>

      </div>
    </div>
  );
}  