import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './App.css';

function App() {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft -500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <div>
     <header className='header'>
      <RiListSettingsLine/>
       <CgProfile/>
     </header>

     <div></div>
     <div>
      <h1>La Martinense</h1>
     </div>
     <div>
      <MdChevronLeft onClick={slideLeft}/>
      <div id='slider'>
      <h3>El Parque</h3>
      <h3>Historia</h3>
      <h3> Agenda</h3>
      <h3> Entitas</h3>
      </div>
      <MdChevronRight onClick={slideRight}/>

     </div>
    </div>
  );
}

export default App;
