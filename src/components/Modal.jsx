import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons' 
import CopyButton from './CopyButton';
import { EmailShareButton, FacebookMessengerShareButton, FacebookShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';

const Modal = ({ isOpen, onClose }) => {
  const link = 'instagram.com/fabricademusculos.pfo/';
  const arrowIcon = <FontAwesomeIcon icon={faChevronRight} />;
  const closeIcon = <FontAwesomeIcon icon={faCircleXmark} />;

  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        {/* Botón para cerrar el modal */}
        <button className='modal-close' onClick={onClose}>
          {closeIcon}
        </button>
        {/* Título del modal */}
        <h3 className='prevent-select'>Comparte el enlace con tus contactos</h3>
        {/* Iconos y enlaces para compartir en redes sociales */}
        <FacebookShareButton url={link}>

            <div className='share-icon-container prevent-select'>
              <span className='social-icon'>
              <FontAwesomeIcon icon={faFacebook} />
              </span>
              <p>Compartir en Facebook</p>
              <span className='arrow-icon'>{arrowIcon}</span>
            </div>

          </FacebookShareButton>
        <WhatsappShareButton url={link}>

            <div className='share-icon-container prevent-select'>
              <span className='social-icon'>
              <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <p>Compartir en Whatsapp</p>
              <span className='arrow-icon'>{arrowIcon}</span>
            </div>

          </WhatsappShareButton >
        <TelegramShareButton url={link}>
            <div className='share-icon-container prevent-select'>
              <span className='social-icon'>
              <FontAwesomeIcon icon={faTelegram} />
              </span>
              <p>Compartir en Telegram</p>
              <span className='arrow-icon'>{arrowIcon}</span>
            </div>
          </TelegramShareButton>
        <FacebookMessengerShareButton url={link}>

            <div className='share-icon-container prevent-select'>
              <span className='social-icon'>
              <FontAwesomeIcon icon={faFacebookMessenger} />
              </span>
              <p>Compartir en Messenger</p>
              <span className='arrow-icon'>{arrowIcon}</span>
            </div>

          </FacebookMessengerShareButton>
        <EmailShareButton url={link}>
          <a  href='' target='blank'>
            <div className='share-icon-container prevent-select'>
              <span className='social-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p>Compartir por Email</p>
              <span className='arrow-icon'>{arrowIcon}</span>
            </div>
          </a>
          </EmailShareButton>
        {/* Mostrar el enlace */}
        <div id='link-copy'>
        <CopyButton/>
          <span>{link}</span>
        </div>
      </div>
    </div>
  );
};

// PropTypes y exportación siguen sin cambios.

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal;