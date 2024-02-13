import api from "../api";

const follow = async (followId) => {
  try {
    const response = await api.post("/profile/following", {
      followId: followId,
    });
    return response;
  } catch (error) {
    console.log(`Follow error: ${error}`);
  }
};

export default follow;
