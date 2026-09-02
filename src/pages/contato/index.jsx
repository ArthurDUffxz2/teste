import './index.scss';
import { Link } from 'react-router-dom';
function Contato() {
  return (
    <div className="Contato">
      <div className='times'>
        <div className='tri'></div>
        <h1>campeões</h1>
        <img src='./assets/images/logo-corinthians.png' alt=''/>
            <img src='./assets/images/ssantos.png' alt=''/>
          <Link to={'/'}><p>Clica aqui para ver os maiores times do brasil novamente</p></Link>
   </div>
    </div>
  );
}

export default Contato;