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
      <button className='spaceMargin'>El Parque</button>
      <button className='spaceButton'>Historia</button>
      <button className='spaceButton'> Agenda</button>
      <button className='spaceButton'> Entitas</button>
     </div>
    </div>
  );
}

export default App;
