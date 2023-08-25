import React, { useEffect, useState } from "react";
import PlusButton from "./PlusButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { getButtons } from "./customHooks";

function Header({ openCompartir, updateButtons }) {
  const [menuAdminOpen, setMenuAdminOpen] = useState(false);
  const location = useLocation();
  //Funciónes para desplegar el menú si es el administrador
  const openMenuAdmin = () => {
    setMenuAdminOpen(true);
  };
  const closeMenuAdmin = () => {
    setMenuAdminOpen(false);
  };

  //Notificar de cambio en ruta
  useEffect(() => {
    const buttonsData = async () => {
      try {
        const buttons = await getButtons();
        updateButtons(buttons);
      } catch (error) {
        console.log(Error);
      }
    };
    buttonsData();
  }, [location]);

  return (
    <header className="share-header">
      <PlusButton
        menuOpen={menuAdminOpen}
        handleHoverOpen={openMenuAdmin}
        handleHoverClose={closeMenuAdmin}
      />
      <button onClick={openCompartir}>
        {/* Ícono para el botón */}
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
    </header>
  );
}

Header.propTypes = {
  openCompartir: PropTypes.func.isRequired,
  updateButtons: PropTypes.func.isRequired,
};

export default Header;
