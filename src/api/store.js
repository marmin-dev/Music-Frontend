import axios from "axios";

export const getStoreListByPage = async (page) => {
  try {
    const response = await axios.get(
      `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/store/${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching store list:", error);
    throw error;
  }
};
