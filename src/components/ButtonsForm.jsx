import React, { useEffect, useState } from "react";
import "../styles/ButtonsForm.css";
import { createButton, deleteButton, getButtons } from "./customHooks";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonsForm() {
  const [formData, setFormData] = useState({
    textInput: "",
    urlInput: "",
  });
  const [buttons, setButtons] = useState(null);
  const [error, setError] = useState(false);
  const [createError, setCreateError] = useState(false);

  const getData = async () => {
    try {
      const data = await getButtons();
      if (data) {
        setButtons(data);

      }
    } catch (errorFetch) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
if(createError){
    setTimeout(() => {
        setCreateError(false);
    }, 2000)
}
  }, [createError]);

  const createNewButton = async (data) => {
    try {
      const newButton = await createButton(data);
      setFormData((prevData)=>({    textInput: "",
      urlInput: "",}))
      getData();
    } catch (errorFetch) {
      setCreateError(true);
    }
  };

  const handleTextChange = (event) => {
    setFormData((prevData) => ({ ...prevData, textInput: event.target.value }));
  };

  const handleUrlChange = (event) => {
    setFormData((prevData) => ({ ...prevData, urlInput: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.textInput && formData.urlInput) {
      createNewButton(formData);
    }
  };

  const deleteData = async (id) => {
    try {
      const deletedButton = await deleteButton(id);
      getData();
    } catch (error) {
      console.log("Error al eliminar botón");
    }
  };

  return (
    <div id="Buttons-form-container">
      {createError ? (
        <div className="error-create">
          <span>Error al crear nuevo botón</span>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit} method="POST">
          <div className="form-content">
            <input
              onChange={handleTextChange}
              value={formData.textInput}
              required
              name="text"
              placeholder="Ingresa el texto del boton"
              className="input-button"
              type="text"
            />
            <input
              onChange={handleUrlChange}
              value={formData.urlInput}
              required
              name="url"
              placeholder="Enlace al dar click sobre el boton"
              className="input-button"
              type="text"
            />
          </div>
          <input className="submit-button-input" type="submit" />
        </form>
      )}
      <section className="buttons-section">
        {!error ? (
          <>
            {buttons ? (
              buttons.map((button) => (
                <p key={button._id} className="button-data">
                 { button.text}
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteData(button._id)}
                  />
                </p>
              ))
            ) : (
              <div className="loading-buttons-section">
                <span>Cargando...</span>
              </div>
            )}
          </>
        ) : (
          <div className="error-buttons-section">
            <span>Error al traer los datos</span>
          </div>
        )}
      </section>
    </div>
  );
}

export default ButtonsForm;
