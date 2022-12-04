import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElParque from './components/ElParque/ElParque';
import ElBarrio from './components/ElBarrio/ElBarrio';
import Entidades from './components/Entidades/Entidades';
import Agenda from './components/Agenda/Agends';

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
      <Link className='spaceButton' 
        to="/barrio"
        type="submit"
        > El Barrio</Link>
   
    </div>
    
    <Routes>
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
