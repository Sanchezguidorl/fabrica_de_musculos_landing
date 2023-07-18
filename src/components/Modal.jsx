import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons' 

const Modal = ({ isOpen, onClose }) => {
      const link='https://localhost/';
  const facebookIcon=<FontAwesomeIcon icon={faFacebook} />;
  const messengerIcon= <FontAwesomeIcon icon={faFacebookMessenger} />;
  const whatsappIcon= <FontAwesomeIcon icon={faWhatsapp} />;
  const instagramIcon= <FontAwesomeIcon icon={faInstagram} />;
  const email= <FontAwesomeIcon icon={faEnvelope} />;
  const arrowIcon= <FontAwesomeIcon icon={faChevronRight} />;
  const closeIcon= <FontAwesomeIcon icon={faCircleXmark} />;

  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal-close' onClick={onClose}>
        {closeIcon}
        </button>
        <h3>Comparte el enlace con tus contactos</h3>
          <a href={link} target='blank'>
            <div className='share-icon-container prevent-select'>
              <i>{facebookIcon}</i>
              <p>Compartir en Facebook</p>
              <i>{arrowIcon}</i>
            </div>
          </a>
          <a href={link} target='blank'>
            <div className='share-icon-container prevent-select'>
              <i>{whatsappIcon}</i>
              <p>Compartir en Whatsapp</p>
              <i>{arrowIcon}</i>
            </div>
          </a>
          <a href={link} target='blank'>
            <div className='share-icon-container prevent-select'>
              <i>{messengerIcon}</i>
              <p>Compartir en Messenger</p>
              <i>{arrowIcon}</i>
            </div>
          </a>
          <a href={link} target='blank'>
            <div className='share-icon-container prevent-select'>
              <i>{instagramIcon}</i>
              <p>Compartir en Instagram</p>
              <i>{arrowIcon}</i>
            </div>
          </a>
          <a href={link} target='blank'>
            <div className='share-icon-container prevent-select'>
              <i>{email}</i>
              <p>Compartir por Email</p>
              <i>{arrowIcon}</i>
            </div>
          </a>
          <div className='link-copy'>
          <p className='prevent-select'>Enlace</p> <span>{link}</span>
      </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal;