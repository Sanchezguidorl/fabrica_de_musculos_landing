// Importar estilos CSS del componente ContainerApp
import "../styles/ContainerApp.css";
import React, { useState } from "react";
import LinkButton from "./LinkButton"; // Importar componente LinkButton
import ModalCompartir from "./ModalCompartir"; // Importar componente Modal
import icon1 from "../assets/logo.png"; // Importar imagen 1 (logo.png)
import icon2 from "../assets/logofm.png"; // Importar imagen 2 (logofm.png)
import ModalCarrusel from "./ModalCarrusel";
import PlusButton from "./PlusButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImagesContainer from "./ImagesContainer";

function ContainerApp() {
  // Estado para controlar si el Modal está abierto o cerrado
  const [modalCarrusel, setModalCarrusel] = useState(false);
  const [modalCompartir, setModalCompartir] = useState(false);
  const [menuAdminOpen, setMenuAdminOpen] = useState(false);

  //Funciónes para desplegar el menú si es el administrador
  const openMenuAdmin = () => {
    setMenuAdminOpen(true);
  };
  const closeMenuAdmin = () => {
    setMenuAdminOpen(false);
  };

  // Funciónes para abrir o cerrar el Modal
  const openModalCompartir = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setModalCompartir(!modalCompartir);
  };
  const openModalCarrusel = (event) => {
    event.preventDefault();
    setModalCarrusel(!modalCarrusel);
  };

  // Arreglo de anclas y mensajes para los LinkButton
  const anchorMessages = [
    [
      "Solicita un plan de ejercicios y nutrición",
      "https://api.whatsapp.com/send?phone=5493513172080",
    ],
    ["Planes", ""],
    [
      "Mantente al día con las actividades grupales que proponemos",
      "https://www.instagram.com/fabricademusculos.pfo/",
    ],
    [
      "Ve nuestras actividades en tiempo real",
      "https://www.instagram.com/guiafitness_com/",
    ],
    ["¿Quieres formar parte del equipo?", "https://ar.linkedin.com/"],
  ];

  const LinksContainer = (
    <>
      <div className="content-container">
        {/* Imagen 1 */}
        <img src={icon1} className="trainer-image" alt="Foto del entrenador" />
        <p>@fabricademusculos.pfo</p>
      </div>
      <div className="allLinks-container">
        {/* Mapear los LinkButton con los anclajes y mensajes */}
        {anchorMessages.map((anchor, index) => (
          <LinkButton
            key={anchor[1]}
            target={index !== 1 ? "self" : "blank"}
            openModal={openModalCompartir}
            openCarrusel={index === 1 ? openModalCarrusel : undefined}
            message={anchor[0]}
            link={anchor[1]}
          />
        ))}
      </div>
    </>
  );

  return (
    <BrowserRouter>
      <div className="container-app">
        {/* Header con botón para abrir el Modal */}
        <header className="share-header">
          <PlusButton
            menuOpen={menuAdminOpen}
            handleHoverOpen={openMenuAdmin}
            handleHoverClose={closeMenuAdmin}
          />
          <button onClick={openModalCompartir}>
            {/* Ícono para el botón */}
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
        </header>
        <Routes>
          <Route path="/" element={LinksContainer} />
          <Route path="/images-carrousel" element={<ImagesContainer />} />
        </Routes>
        <div>
          {/* Mostrar el Modal */}
          <ModalCompartir
            isOpen={modalCompartir}
            onClose={openModalCompartir}
          />
          <ModalCarrusel isOpen={modalCarrusel} onClose={openModalCarrusel} />
          <div className="icon-footer">
            {/* Imagen 2 */}
            <img src={icon2} alt="Logo del Gymnasio" width="60" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default ContainerApp;
