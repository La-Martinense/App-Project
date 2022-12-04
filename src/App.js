import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import './App.css';

function App() {
  return (
    <div >
     <header>
      <RiListSettingsLine/>
       <CgProfile/>
     </header>
     <div></div>
     <div>
      <h1>La Martinense</h1>
     </div>
     <div>
      <h3>El Parque</h3>
      <h3>Historia</h3>
      <h3> Agenda</h3>
      <h3> Entitas</h3>
     </div>
    </div>
  );
}

export default App;
