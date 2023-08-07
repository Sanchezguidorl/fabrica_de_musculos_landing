import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import slide1 from "../assets/slides/slide-1.jpg";
import slide2 from "../assets/slides/slide-2.jpg";
import slide3 from "../assets/slides/slide-3.jpg";
import slide4 from "../assets/slides/slide-4.jpg";
import slide5 from "../assets/slides/slide-5.jpg";
import slide6 from "../assets/slides/slide-6.jpg";
import Offer from "./Offer";
const ModalCarrusel = ({ isOpen, onClose }) => {
  const closeIcon = <FontAwesomeIcon icon={faCircleXmark} />;
  const [offerIndex, setOfferIndex] = useState(0);
  const offers = [
    {
      id: 1,
      img: slide1,
      plan: "nombre del plan",
      message: "Texto a enviar para pedir la promoción",
    },
    {
      id: 2,
      img: slide2,
      plan: "nombre del plan",
      message: "Texto a enviar para pedir la promoción",
    },
    {
      id: 3,
      img: slide3,
      plan: "nombre del plan",
      message: "Texto a enviar para pedir la promoción",
    },
    {
      id: 4,
      img: slide4,
      plan: "nombre del plan",
      message: "Texto a enviar para pedir la promoción",
    },
    {
      id: 5,
      img: slide5,
      plan: "nombre del plan",
      message: "Texto a enviar para pedir la promoción",
    },
    {
      id: 6,
      img: slide6,
      plan: "nombre del plan",
      message: "Texto a enviar para pedir la promoción",
    },
  ];

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
          <Offer
            key={offers[offerIndex].id}
            slide={offers[offerIndex].img}
            plan={offers[offerIndex].plan}
            message={offers[offerIndex].message}
          />
          <a
            target="blank"
            href={`https://api.whatsapp.com/send?phone=3517458202&text=${offers[offerIndex].message}`}
            className="button-offer"
          >
            Me interesa
          </a>
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
