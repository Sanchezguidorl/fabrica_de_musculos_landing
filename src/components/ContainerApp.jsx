import '../styles/ContainerApp.css'
import { React, useState } from 'react';
import LinkButton from './LinkButton';
import Modal from './Modal';
import icon1 from '../assets/logo.png'
import icon2 from '../assets/logofm.png'
function ContainerApp() {

   const [modalOpen, setModalOpen] = useState(false);

   const openModal = (event) => {
     event.preventDefault();
     setModalOpen(!modalOpen);
   };

   const anchorMessages=[
      ['Solicita un plan de ejercicios y nutrición','https://api.whatsapp.com/send?phone=5493513172080'],
      ['Conoce nuestros productos y equipamiento para entrenamiento', 'https://guiafitness.com/'],
      ['Mantente al día con las actividades grupales que proponemos', 'https://www.instagram.com/fabricademusculos.pfo/'],
      ['Ve nuestras actividades en tiempo real', 'https://www.instagram.com/guiafitness_com/'],
      ['¿Quieres formar parte del equipo?', 'https://ar.linkedin.com/']
   ]

   return (
      <div className='container-app'>
         <header className='share-header'>
            <button onClick={openModal}>
            <svg width='16' height='16' viewBox='0 0 16 16'><path fill='currentColor' stroke='currentColor' d='M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z'></path><path fill='currentColor' stroke='currentColor' d='M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z'></path><path fill='currentColor' stroke='currentColor' d='M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z'></path></svg>
            </button>
         </header>
         <div className='content-container'>
            <img src={icon1} className='trainer-image' alt='Foto del entrenador' />
            <p>@fabricademusculos.pfo</p>
         </div>
         <div className='allLinks-container'>

            {anchorMessages.map((anchor)=>
            <LinkButton key={anchor[1]} openModal={openModal} message={anchor[0]} link={anchor[1]} />)
            }
         </div>
         <div>
      <Modal isOpen={modalOpen} onClose={openModal}/>
      <div className='icon-footer'>
         <img src={icon2} alt='Logo del Gymnasio' width='60'/>
      </div>
    </div>
      </div>
   )
}

export default ContainerApp;