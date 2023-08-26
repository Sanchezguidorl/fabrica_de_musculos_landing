import axios from "axios";

const urlBase='https://backend-fabrica-de-musculos.vercel.app';

export const getImages= async()=>{
    try {
        const images= await axios.get(`${urlBase}/images`);
        console.log(images.data)
        return images.data;
    } catch (error) {
        return error;
    }
}

export const deleteImage= async(id)=>{
    try {
        const deletedImage= await axios.delete(`${urlBase}/images/${id}/delete`);
        return true;
    } catch (error) {
        return false;
    }
}

export const createImage= async(imageData)=>{
    try {
        const newImage= await axios.post(`${urlBase}/images/add`,imageData,
        {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          });
        return true;
    } catch (error) {
        return false;
    }
}


export const getButtons= async()=>{
    try {
        const buttons= await axios.get(`${urlBase}/buttons`);
        return buttons.data;
    } catch (error) {
        throw error;
    }
}

export const deleteButton= async(id)=>{
    try {
        const deleteButton= await axios.delete(`${urlBase}/buttons/delete/${id}`);
        return true;
    } catch (error) {
        return false;
    }
}

export const createButton= async(buttonData)=>{
    try {
        const newButton= await axios.post(`${urlBase}/buttons/add`,buttonData);
        return true;
    } catch (error) {
       throw error;
    }
}