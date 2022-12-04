import './Agenda.css';
const Agenda = () => {
    return (
        <div>
            <div className='containerAgenda'>
            <h3 className="styleAgenda">El barrio eres tú</h3>
            <p>¡Participa de tu barrio! La Martinense quiere ser un espacio para todes, por lo que si tienes una idea para un evento que te gustaría que ocurriese en el barrio, ¡háznoslo saber! Pulsa aquí.
</p>
</div>
<div>
    <ul className='containerListAgenda'>
    <li>Fecha</li>
    <li>Tipo</li>
    <li>Ordenar</li>
    </ul>
</div>
<div className='containerAgenda1'> 
         <div class="DisplayBoxes">
             <h3 className='TextBoldAgenda'>
                Petit mercat ambulant de Provençals
             </h3>
             <p>Cuándo:Evento permanente
              Dónde: C/ Menorca (entre C/ Treball i Selva de Mar) y C/ Menorca 19*23 (Sant Martí)</p>
         </div>
         <img class="media-object" src= 'assets/image2.png' alt=""/>
</div>
<div className='lineAgenda'>
</div>
<div className='containerAgenda1'></div>
<div class="DisplayBoxes">
    <h3  className='TextBoldAgenda'>
    Grups de criança a l'Espai Familiar Sant Martí
    </h3>
    <p>Cuándo: Del 12/09/2022 al 21/06/2023
Dónde: EFCM Espai Familiar Socioeducatiu i Centre Obert Municipal Sant Martí
Carrer de Huelva 36 (Sant Martí)</p>
<img class="media-object"src= 'assets/image7.png' alt=""/>
</div>
<div className='lineAgenda'>
</div>
<div className='containerAgenda1'></div>
    <img class="media-object" src= 'assets/image2-1.png' alt=""/>
    <div class="DisplayBoxes">
    <h3 className='TextBoldAgenda'>
    Visites als horts urbans de la Masia Can Mestres i la Masia Can Cadena
    </h3>
    <p>Cuándo:Evento permanente
Dónde:Hort Urbà Masia Can Cadena
C Menorca 27 (Sant Martí)</p>
</div>
<div className='lineAgenda'>
</div>

        </div>
    )
}
export default Agenda

