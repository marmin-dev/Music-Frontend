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

export const getStoreListByUser = async () => {
  const id = localStorage.getItem("userId");
  try {
    const response = await axios.get(
      `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/store/user/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const createStore = async ({ userId, storeName }) => {
  console.log({ userId, storeName });
  await axios
    .post(
      "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/store",
      { userId, storeName }
    )
    .then((response) => {
      console.log(response);
      if (response.data.status == 500) {
        alert("중복되는 가게이름입니다");
        throw Error;
      } else {
        alert("가게 등록이 완료되었습니다");
        window.location.href = "/stores";
      }
      return { data: "data" };
    });
};

export const getStoreDetail = async (id) => {
  const response = axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/store/detail/${id}`
  );
  return response;
};
