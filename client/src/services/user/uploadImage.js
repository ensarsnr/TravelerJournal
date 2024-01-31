import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  


const uploadImage = async (formData) => {
    try {
        const response = await api.post("/post/image", formData);
        return response;
    } catch (error) {
        console.log(`Upload image error: ${error}`)
    }
}

export default uploadImage;
