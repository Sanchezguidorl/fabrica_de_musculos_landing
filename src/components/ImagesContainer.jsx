import React, { useEffect, useState } from "react";
import "../styles/ImagesContainer.css";
import { createImage, deleteImage, getImages } from "./customHooks";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImagesContainer() {
  const [miniature, setMiniature] = useState(null);
  const [images, setImages] = useState([]);
  const [formLoaded, setFormLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    message: "",
  });
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const imageData = await getImages();
    if (imageData) {
      setImages(imageData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const saveImage = async (data) => {
      try {
        const newImage = await createImage(data);

        if (newImage) {
          setFormLoaded(false);
          fetchData();
        }
      } catch (error) {
        setError(true);
      }
    };
    if (formLoaded) {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("image", formData.image);
      data.append("message", formData.message);

      saveImage(data);
      setMiniature(null);
      setFormData({ name: "", image: null, message: "" });
    }
  }, [formLoaded]);

  useEffect(() => {
    if (error) {
      const errorTimeout = setTimeout(() => {
        setError(false);
      }, 2000);
      return () => clearTimeout(errorTimeout);
    }
  }, [error]);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setMiniature(<img src={e.target.result} alt="Miniature" width={90} />);
      };

      reader.readAsDataURL(selectedImage);
      setFormData((prevData) => ({
        ...prevData,
        image: selectedImage,
      }));
    } else {
      setMiniature(null);
      setFormData((prevData) => ({
        ...prevData,
        image: null,
      }));
    }
  };

  const handleChangeName = (event) => {
    const newName = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      name: newName,
    }));
  };

  const handleChangeMessage = (event) => {
    const newMessage = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      message: newMessage,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormLoaded(true);
  };

  const deleteImageById = (id) => {
    const deleteNow = async () => {
      try {
        const imageDeleted = await deleteImage(id);
        if (imageDeleted) {
          fetchData();
        }
      } catch (error) {
        console.log("Error al eliminar imagen");
      }
    };
    deleteNow();
  };

  return (
    <div id="Images-container">
      {formLoaded ? (
        <div className="loadingForm">
          {error ? (
            <span>Error al cargar subir imagen</span>
          ) : (
            <span className="loader"></span>
          )}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          id="Form-images"
          encType="multipart/form-data"
        >
          <legend>Agrega una nueva imagen al carrusel</legend>
          <div className="form-content">
            <input
              className="name-image-input"
              type="text"
              name="name"
              placeholder="Descripción breve de la imagen"
              onChange={handleChangeName}
              required
              value={formData.name}
            />
            <textarea
              className="name-image-input"
              name="message"
              placeholder="Agrega una plantilla de mensaje de whatsapp"
              onChange={handleChangeMessage}
              required
              value={formData.message}
            ></textarea>

            <div className="form-div-images">
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
              <div className="miniature-container">{miniature}</div>
            </div>
            <input className="submit-image-input" type="submit" />
          </div>
        </form>
      )}
      <section id="gallery">
        {images.length>0 &&
          images.map((image) => (
            <div key={image._id} className="image-gallery">
              <img
                src={`data:image/jpeg;base64,${image.imageBase64}`}
                alt={image.name}
              />
              <i
                className="deleteButton"
                onClick={() => deleteImageById(image._id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </div>
          ))}
      </section>
    </div>
  );
}

export default ImagesContainer;
