import './index.scss';
import { useState } from 'react';

function Contador() {

        const[contador, setcontador] = useState(0);

        function aumentar (){
            setcontador(contador+1)
        }

        function menos(){
            setcontador(contador-1)
        }

  return (
    <div className="Contador">
      <h1>Contador de Click</h1>

      <div className='itens'>

      <button onClick={menos}>-</button>
      <h2>{contador}</h2>
      <button onClick={aumentar}>+</button>

      </div>
    </div>
  );
}

export default Contador;