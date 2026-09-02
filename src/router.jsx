 
 import './index.css';
import App from './pages/app/App.js';
import Contato from './pages/contato/index.jsx'
import './pages/contato/index.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
 
 
 export default function Router() {
 return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/brasileiro' element={<Contato/>}/>
    </Routes>
    </BrowserRouter>
 )
    }

