import axios from "axios";

export const getStoryList = async (storeId) => {
  const response = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/story/list/${storeId}`
  );
  console.log(response.data);
  return response.data;
};

export const createStory = async ({ userId, storeId }) => {
  await axios.post();
};

export const getStoryDetail = async (storyId) => {
  const response = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/story/detail/${storyId}`
  );
  return response.data;
};
