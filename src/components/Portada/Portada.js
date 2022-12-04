import { MdKeyboardArrowUp } from 'react-icons/md';

const Portada = () => {
    return (
        <div>
             <img class="media-object" src= 'assets/image41.png' alt=""/>
             <div>
                <p>Presentacion</p>
                <MdKeyboardArrowUp/>
             </div>
             <div>
                <p> La Martinense es la plataforma colaborativa de vecinos de Sant Martí de 
                    Provençals, dirigida a todas aquellas personas que viven o quieren estar
                    informados de todas las atividades que suceden en
                     barrio, donde los vecinos recibirán a los recien llegados y para todos 
                     aquellos que quieran estar al día de ...
                </p>
             </div>
             <div>
                <h3>El barrio eres tú.</h3>
                <p>¡Participa de tu barrio! La Martinense quiere ser un espacio para todes, 
                    por lo que si tienes una idea para un evento, echas en menos alguna iniciativa 
                    social o quieres participar con nosotros, ¡háznoslo saber! Pulsa aquí.
                </p>
             </div>
             <h2>Destacado</h2>
             <div>
                <h3>Evento: Fiesta del Parque</h3>
                <p>Fiesta de los San Martianos del 40 de mayo: jornada multicultural con decenas de 
                    actividades:  Música Monólogos Títeres Magia Las mejores food tucks Charlas 

                     Cuándo: 10/6/2022 
                     Dónde: Parque de Sant Martí
                </p>
                <img class="media-object" src= 'assets/evento5.png' alt=""/>
             </div>
        </div>
    )
}
export default Portada