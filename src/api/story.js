import axios from "axios";

export const getStoryList = async (storeId) => {
  const response = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/story/list/${storeId}`
  );
  console.log(response.data);
  return response.data;
};

export const postStory = async ({
  songName,
  artist,
  uri,
  emotion,
  content,
}) => {
  const userId = localStorage.getItem("userId");
  let storeId = Number(window.location.pathname.split("/")[3]);
  await axios
    .post(
      `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/store/${userId}/${storeId}`,
      { songName, artist, uri, emotion, content }
    )
    .then((response) => {
      console.log(response);
      window.location.href = `/store/${storeId}`;
    });
};

export const getStoryDetail = async (storyId) => {
  const response = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/story/detail/${storyId}`
  );
  return response.data;
};
