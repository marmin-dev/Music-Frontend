import axios from "axios";

export const getCommentList = async (storyId) => {
  const response = axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/comment/${storyId}`
  );
  return response;
};

export const createComment = async (storyId, { userId, content }) => {
  await axios
    .post(
      `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/comment/${storyId}`,
      { userId, content }
    )
    .then((response) => {
      return response;
    });
};
