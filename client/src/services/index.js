import register from "./auth/register";
import login from "./auth/login";
import profile from "./user/profile";
import uploadImage from "./user/uploadImage";
import getImages from "./user/getImages";
import follow from "./user/following";

const services = { register, login, profile, uploadImage, getImages, follow };

export default services;
