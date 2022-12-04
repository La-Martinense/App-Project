import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import './App.css';

function App() {
  return (
    <div>
     <header className='header'>
      <RiListSettingsLine/>
       <CgProfile/>
     </header>
     <div className='line'></div>
     <div>
      <h1 className='titlle'>La Martinense</h1>
     </div>
     <div className='containerNabvar'>
      <h3>El Parque</h3>
      <h3>Historia</h3>
      <h3> Agenda</h3>
      <h3> Agenda</h3>
     </div>
    </div>
  );
}

export default App;
