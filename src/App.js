import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';

import './App.css';

function App() {
  // const slideLeft = () => {
  //   var slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft -500
  // }

  // const slideRight = () => {
  //   var slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft + 500
  // }
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
     <div className='containerSlide'>   
      <button>El Parque</button>
      <button>Historia</button>
      <button> Agenda</button>
      <button> Entitas</button>
     </div>
    </div>
  );
}

export default App;
