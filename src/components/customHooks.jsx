import axios from "axios";

export const getImages= async()=>{
    try {
        const images= await axios.get('http://localhost:5000/images');
        return images.data;
    } catch (error) {
        return error;
    }
}

export const deleteImage= async(id)=>{
    try {
        const deletedImage= await axios.delete(`http://localhost:5000/images/${id}/delete`);
        return true;
    } catch (error) {
        return false;
    }
}

export const createImage= async(imageData)=>{
    try {
        const newImage= await axios.post(`http://localhost:5000/images/add`,imageData,
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