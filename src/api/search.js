import axios from "axios";

export const getSearch = async () => {
  const id = localStorage.getItem("userId");
  const response = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/search/${id}`
  );
  return response;
};

export const getPathSearch = async (search) => {
  const userId = localStorage.getItem("userId");
  const response = await axios.post(
    "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/search",
    { search, userId }
  );
  return response;
};

export const getSearchByKey = async (search) => {
  const response = await axios.post(
    "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/song",
    {
      search,
    }
  );
  return response;
};
