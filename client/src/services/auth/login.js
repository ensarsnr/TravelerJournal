import api from "../api";

const login = async (username, password) => {
  try {
    const response = api.post("/auth/login", {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    console.log(`Login error: ${error}`);
  }
};

export default login;
