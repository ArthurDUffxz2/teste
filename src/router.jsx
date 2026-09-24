 
 import './index.css';
import App from './pages/app/App.js';
import Contato from './pages/contato/index.jsx'
import './pages/contato/index.scss'
import Evento from './pages/eventos/index.jsx'
import Cadastro from './pages/Cadastro/index.jsx'
import './pages/Cadastro/index.scss'
import Contador from './pages/Contador/index.jsx';
import './pages/Contador/index.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
 
 
 export default function Router() {
 return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/brasileiro' element={<Contato/>}/>
      <Route path='/Evento' element={<Evento/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Contador' element={<Contador/>}/>
    </Routes>
    </BrowserRouter>
 )
    }

