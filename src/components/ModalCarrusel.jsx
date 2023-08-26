import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Modal.css";
import "../styles/Load.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Offer from "./Offer";
import { getImages } from "./customHooks";
const ModalCarrusel = ({ isOpen, onClose }) => {
  const closeIcon = <FontAwesomeIcon icon={faCircleXmark} />;
  const [offerIndex, setOfferIndex] = useState(0);
  const [offers, setOffers]= useState(null);


  useEffect(()=>{
    const fetchOffers= async()=>{
      try {
        const data= await getImages();
        if(getImages){
          setOffers(data);
        }
      } catch (error) {
        console.log("Error al obtener ofertas")
      }
    }
  if(isOpen){
    fetchOffers()
  }
  },[isOpen])

  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) {
    return null;
  }

  const incrementIndex = () => {
    if (offerIndex === offers.length - 1) {
      setOfferIndex(0);
    } else {
      setOfferIndex((index) => index + 1);
    }
  };

  const decrementIndex = () => {
    if (offerIndex === 0) {
      setOfferIndex(offers.length - 1);
    } else {
      setOfferIndex((index) => index - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-carrusel">
        <div className="img-container">
          {/* Botón para cerrar el modal */}
          <button
            className="arrow-carrusel-icon arrow-right"
            onClick={incrementIndex}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button
            className="arrow-carrusel-icon arrow-left"
            onClick={decrementIndex}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="modal-close" onClick={onClose}>
            {closeIcon}
          </button>
<>{offers!==null&&
<>{offers.length===0 ?
(
<div className="planes-empty">No existen planes cargados</div>
)
:
<>{        
   offers.map((offer, index)=> <Offer
            key={offer._id}
            slide={`data:image/jpeg;base64,${offer.imageBase64}`}
            index={index===offerIndex}
            plan={offer.name}
            message={offer.message}
          />)
  }</>
  }</>
      }</>
        </div>
      </div>
    </div>
  );
};

ModalCarrusel.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalCarrusel;
