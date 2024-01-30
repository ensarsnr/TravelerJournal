import register from "./auth/register";
import login from "./auth/login";
import profile from "./user/profile";
import uploadImage from "./user/uploadImage";
import getImages from "./user/getImages";

const services = { register, login, profile, uploadImage, getImages };

export default services;
