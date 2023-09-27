// Importar estilos CSS del componente ContainerApp
import "../styles/ContainerApp.css";
import React, { useEffect, useState } from "react";
import LinkButton from "./LinkButton"; // Importar componente LinkButton
import ModalCompartir from "./ModalCompartir"; // Importar componente Modal
import icon1 from "../assets/logo.png"; // Importar imagen 1 (logo.png)
import icon2 from "../assets/logofm.png"; // Importar imagen 2 (logofm.png)
import ModalCarrusel from "./ModalCarrusel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImagesContainer from "./ImagesContainer";
import ButtonsForm from "./ButtonsForm";
import Header from "./Header";
import Login from "./Login";
import AdmindRouteRedirect from "./AdmindRouteRedirect";

function ContainerApp() {
  // Estado para controlar si el Modal está abierto o cerrado
  const [modalCarrusel, setModalCarrusel] = useState(false);
  const [modalCompartir, setModalCompartir] = useState(false);
  const [anchorMessages, setAnchorMessages] = useState(null);
  const [sessionAdmin, setSessionAdmin] = useState();
  const [showAbout, setShowAbout] = useState(false);
  useEffect(() => {
    if (localStorage.accessToken) {
      setSessionAdmin(localStorage.accessToken);
    }
  }, [localStorage.accessToken]);

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

  const LinksContainer = (
    <>
      <div className="content-container">
        <img src={icon1} className="trainer-image" alt="Foto del entrenador" />
        <p>@fabricademusculos.pfo</p>
      </div>
      {!anchorMessages ? (
        <div className="loading-anchors">
          <span>Cargando datos...</span>
        </div>
      ) : (
        <div className="allLinks-container">
          {/* Mapear los LinkButton con los anclajes y mensajes */}
          <div className="" onClick={() => setShowAbout(!showAbout)}>
            <LinkButton target="self" message={"¿Quiénes somos?"} />
            <div className={`about-content ${showAbout && "d-block"}`}>
              <strong>Fábrica de músculos nace en 2019.</strong>
              <br />
              Te ofrecemos un equipo de trabajo con el objetivo de ayudarte a
              lograr tu mejor versión a través de la enseñanza de hábitos
              alimenticios saludables y acompañamiento de actividad física.
              Somos especialistas en entrenamiento y nutrición, seleccionamos
              los métodos fitness más efectivos.
            </div>
          </div>
          {anchorMessages &&
            anchorMessages.map((anchor) => (
              <LinkButton
                key={anchor._id}
                target="blank"
                openModal={openModalCompartir}
                openCarrusel={undefined}
                message={anchor.text}
                link={anchor.url}
              />
            ))}
          <LinkButton
            target="self"
            openModal={openModalCompartir}
            openCarrusel={openModalCarrusel}
            message={"Planes"}
          />
        </div>
      )}
    </>
  );

  return (
    <BrowserRouter>
      <div className="container-app">
        {/* Header con botón para abrir el Modal */}
        <Header
          existAdmin={sessionAdmin}
          openCompartir={openModalCompartir}
          updateButtons={setAnchorMessages}
        />
        <Routes>
          <Route path="/" element={LinksContainer} />
          <Route
            path="/images-carrousel"
            element={
              <AdmindRouteRedirect existUser={sessionAdmin}>
                <ImagesContainer />
              </AdmindRouteRedirect>
            }
          />
          <Route path="/admin" element={<Login />} />
          <Route
            path="/buttons"
            element={
              <AdmindRouteRedirect existUser={sessionAdmin}>
                <ButtonsForm />
              </AdmindRouteRedirect>
            }
          />
        </Routes>
        <div>
          <ModalCompartir
            isOpen={modalCompartir}
            onClose={openModalCompartir}
          />
          <ModalCarrusel isOpen={modalCarrusel} onClose={openModalCarrusel} />
          <div className="icon-footer">
            <img src={icon2} alt="Logo del Gymnasio" width="60" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default ContainerApp;
