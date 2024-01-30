import api from "../api";


const getImages = async () => {
    try {
        const response = api.get("/post/get-image");
        return response;
    } catch (error) {
        console.log(`Get images error: ${error}`)
    }
}



export default getImages;