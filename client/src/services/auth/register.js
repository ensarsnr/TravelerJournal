import api from "../api";

const register = async (username, email, password) => {
  try {
    const response = api.post("/auth/register", {
      username: username,
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    console.log(`Register error ${error}`);
  }
};

export default register;
