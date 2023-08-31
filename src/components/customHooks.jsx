import axios from "axios";
import instance from "./IntanceRequest";

export const getImages = async () => {
  try {
    const response = await instance.get(`/images`);
    return response.data;
  } catch (error) {
    throw new Error("Ocurrió un error al obtener las imágenes");
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await instance.delete(`/images/${id}/delete`);
    return true;
  } catch (error) {
    throw new Error("Ocurrió un error al eliminar la imagen");
  }
};

export const createImage = async (imageData) => {
  try {
    const response = await instance.post(`/images/add`, imageData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    throw new Error("Ocurrió un error al crear la imagen");
  }
};

export const getButtons = async () => {
  try {
    const response = await instance.get(`/buttons`);
    return response.data;
  } catch (error) {
    throw new Error("Ocurrió un error al obtener los botones");
  }
};

export const deleteButton = async (id) => {
  try {
    const deleteButton = await instance.delete(`/buttons/delete/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const createButton = async (buttonData) => {
  try {
    const newButton = await instance.post(`/buttons/add`, buttonData);
    return newButton;
  } catch (error) {
    throw new Error("Ocurrió un error al crear el botón");
  }
};

export const login = async (data) => {
  try {
    const response = await instance.post(`/user/auth`, data);
    if (response.status === 200) {
      const accessToken = response.headers.authorization;
      localStorage.setItem("accessToken", accessToken.replace("Bearer ", ""));
      return true;
    } else {
      throw new Error("Datos de validación incorrectos");
    }
  } catch (error) {
    throw new Error("Ocurrió un error durante la autenticación");
  }
};
