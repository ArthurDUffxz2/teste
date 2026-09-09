import './index.scss';
function Clicou (e){
      let novovalor= e.target.value
          alert('nome digitado '+ novovalor);
      }
         function Alterou(){
        alert('departamento selecionado')
    }
 function Selecionou(e) {
  let funcionario = e.target.value;
  alert('Tipo de funcionario: ' + funcionario);
}
function Entrou() {
  alert('O mouse entrou na área!');
}

function Saiu() {
  alert('O mouse saiu da área!');

}
function Cadastrar() {
  alert('Funcionário cadastrado com sucesso!');
}


export default function Cadastro() {
  return (
    <div className="Partezona">
        <div className='cadastro'>
        <h1>Cadastro administrativo</h1>
        </div>

        

<div className='nome'>
            <h1>  
        Nome do funcionario
            </h1>

             
    
    <input className='nomeusario' onChange={Clicou} type='text' placeholder='Nome do funcionario'/>
  <h2>  
    Selecione seu departamento
            </h2>
 <select onChange={Alterou} id="" defaultValue="">
      <option value="Administração">Administração</option>
      <option value="Recursos Humanos">Recursos Humanos</option>
      <option value="Financeiro">Financeiro</option>
        <option value="Marketing">Marketing</option>
          <option value="TI">TI</option>
              </select>
    <br />

<input
  type="radio"
  name="opcao"
  value="Efetivo"
  onChange={Selecionou}
/>
Efetivo

<input
  type="radio"
  name="opcao"
  value="Temporário"
  onChange={Selecionou}
/>
Temporário

<input
  type="radio"
  name="opcao"
  value="Estagiário"
  onChange={Selecionou}
/>
Estagiário

<input
  type="radio"
  name="opcao"
  value="Jovem Aprendiz"
  onChange={Selecionou}
/>
Jovem Aprendiz
<br />
<div className='mouse1'
onMouseEnter={Entrou}
  onMouseLeave={Saiu}
 >
PASSE O MOUSE AQUI 

 
</div>
<br />
<br />
<br />
<div className='funcionario'>
<button onClick={Cadastrar}>
  Cadastrar Funcionário
</button>
</div>
</div>


  



  
    </div>
    
  );
  

}