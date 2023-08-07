// Importar módulos necesarios
import React from 'react';
import '../styles/LinkButton.css'; // Importar estilos CSS del componente
import PropTypes from 'prop-types';

function LinkButton({ openModal, message, link, openCarrusel }) {

  return (
    <div className='container-link prevent-select'>
      {/* Enlace con mensaje */}
      <a className='link' onClick={openCarrusel} href={link} target='blank'>
        <p>{message}</p>
        {/* Botón con ícono para abrir el Modal */}
        <button onClick={openModal}>
          <svg width='16' height='16' viewBox='0 0 16 16'><path fill='currentColor' stroke='currentColor' d='M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z'></path><path fill='currentColor' stroke='currentColor' d='M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z'></path><path fill='currentColor' stroke='currentColor' d='M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z'></path></svg>
        </button>
      </a>
    </div>
  );
}

// Definir tipos de las props usando PropTypes
LinkButton.propTypes = {
  openModal: PropTypes.func,
  message: PropTypes.string,
  link: PropTypes.string,
  openCarrusel: PropTypes.func
};

export default LinkButton;