import './index.scss';

export default function Evento() {

    function Alterou(){
        alert('Escolheu o turno')
    }

    function Moveu(){
        alert('Passou Perto')
    }

 
    function Clicou (e){
      let novovalor= e.target.value
          alert('Alterou o valor do input para '+ novovalor);
      }

  return (
    <div className="Evento">
        <div className='Partezinha'>
            <h1>Cadastro para Eventos</h1>
            Email
            <br/>
            <input onChange={Clicou} type='text' placeholder='Escreva aqui'/>
            Senha
            <br/>
            <input onMouseMove={Moveu} type='password' placeholder='Senha'/>
            <div className='input'>
            <p>Escolha o turno do evento:</p>
     <select onChange={Alterou} id="turno-select" defaultValue="manha">
      <option value="manha">Manhã</option>
      <option value="tarde">Tarde</option>
      <option value="noite">Noite</option>
       </select>
            <div className='botao'>
               <p>Entrar</p>
            </div>
        </div>
    </div>
    </div>
  );
}