import axios from "axios";

// 스토리 리스트 가죵져오기
export const getStoryList = async (storeId) => {
  const response = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/story/list/${storeId}`
  );
  console.log(response.data);
  return response.data;
};

// 스토리 등록하기
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

export const getRecommendSong = async ({ emotion }) => {
  const response = await axios.post(
    "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/songrec",
    { emotion }
  );
  console.log(response);
  return response.data;
};

export const getEmotion = async (story) => {
  const response = await axios.post(
    "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/ai",
    {
      story,
    }
  );
  return response.data[0];
};
