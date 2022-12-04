import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElParque from './components/ElParque/ElParque';
import ElBarrio from './components/ElBarrio/ElBarrio';
import Entidades from './components/Entidades/Entidades';
import Agenda from './components/Agenda/Agends';
import Portada from './components/Portada/Portada';

import './App.css';

function App() {


  return (
  <>
 <Router>
    <div>
     <header className='header'>
      <RiListSettingsLine/>
       <CgProfile/>
     </header>

     <div className='line'></div>
     <div>
      <h1 className='titlle'>La Martinense</h1>
     </div>
     <div className='containerSlide'>   

     <Link className='spaceButton' 
        to="/"
        type="submit"
        > Portada</Link>

      <Link className='spaceMargin'
        to="/elParque"
        type="submit"
      >El Parque</Link>
      <Link className='spaceButton'
       to="/historia"
       type="submit"
       >Historia</Link>
      <Link className='spaceButton'
       to="/agenda"
       type="submit"
       > Agenda</Link>
      <Link className='spaceButton'
        to="/entidades"
        type="submit"
        > Entidades</Link>

     </div>
      
   
    </div>
    
    <Routes>
    <Route 
      exact
      path='/'
      element={
        <Portada/>
      }
      />

      <Route 
      exact
      path='/elParque'
      element={
        <ElParque/>
      }
      />
    <Route 
      exact
      path='/barrio'
      element={
        <ElBarrio/>
      }
      />
          <Route 
      exact
      path='/entidades'
      element={
        <Entidades/>
      }
      />
          <Route 
      exact
      path='/agenda'
      element={
        <Agenda/>
      }
      />
    </Routes>
    </Router>
    
  </>
  );
  
}

export default App;
