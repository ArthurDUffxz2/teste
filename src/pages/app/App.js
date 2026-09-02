import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>timaços</h1>
      <img src='./assets/images/OIP.png' alt=''/>
      <Link to={'/brasileiro'}><p>Clica aqui para ver os maiores times do brasil</p></Link>
    </div>
  );
}

export default App;
