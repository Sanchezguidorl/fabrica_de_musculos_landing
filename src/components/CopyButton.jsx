import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function CopyButton() {
  const [isCopied, setIsCopied] = useState(false);

  // Efecto para reiniciar el estado "isCopied" después de mostrar la notificación
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2900);
    }
  }, [isCopied]);

  const copy = () => {
    const link = "www.instagram.com/fabricademusculos.pfo/";
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  return (
    <>
      {/* Mostrar la notificación si el enlace fue copiado */}
      {isCopied && (
        <span className="notification-container">
          <p className="copy-notification">El enlace fue copiado</p>
        </span>
      )}
      {/* Botón de copiar */}
      <i onClick={copy}>
        <FontAwesomeIcon icon={faCopy} style={{ color: "#3c3c3c" }} />
      </i>
    </>
  );
}

export default CopyButton;
