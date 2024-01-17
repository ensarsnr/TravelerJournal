import api from "../api";

const profile = async () => {
    try {
        const response = await api.get("/get/profile");
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default profile;