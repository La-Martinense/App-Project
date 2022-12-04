import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElParque from './components/ElParque/ElParque';
import ElBarrio from './components/ElBarro/ElBarro';
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

      <Link
        to="/"
        type="submit"
      >El Parque</Link>
      <Link 
       to="/historia"
       type="submit"
       >Historia</Link>
      <Link 
       to="/agenda"
       type="submit"
       > Agenda</Link>
      <Link  
        to="/entidades"
        type="submit"
        > Entidades</Link>

     </div>
      <Link  
        to="/barrio"
        type="submit"
        > El Barrio</Link>
   
    </div>
    
    <Routes>
      <Route 
      exact
      path='/'
      element={
        <ElParque/>
      }
      />
          <Route 
      exact
      path='/'
      element={
        <ElBarrio/>
      }
      />
          <Route 
      exact
      path='/'
      element={
        <Entidades/>
      }
      />
          <Route 
      exact
      path='/'
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
