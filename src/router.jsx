 
 import './index.css';
import App from './pages/app/App.js';
import Contato from './pages/contato/index.jsx'
import './pages/contato/index.scss'
import Evento from './pages/eventos/index.jsx'
import Cadastro from './pages/Cadastro/index.jsx'
import './pages/Cadastro/index.scss'
import Contador from './pages/Contador/index.jsx';
import './pages/Contador/index.scss'
import Texto from './pages/texto/index.jsx';
import Cabecalho from './components/cabecalho/index.jsx';
import Cep from './pages/cep/index.jsx';
import './pages/cep/index.scss'
import './pages/texto/index.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Ingressos from './pages/ingresso/index.jsx';
 
 
 export default function Router() {
 return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/brasileiro' element={<Contato/>}/>
      <Route path='/Evento' element={<Evento/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Contador' element={<Contador/>}/>
      <Route path='/Texto' element={<Texto/>}/>
      <Route path='/Cabecalho' element={<Cabecalho/>}/>
      <Route path='/Cep' element={<Cep/>}/>
      <Route path='/Ingresso' element={<Ingressos/>}/>
    </Routes>
    </BrowserRouter>
 )
    }

