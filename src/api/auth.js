import client from "./client";

// 로그인 API 호출
export const login = ({ userId, password }) =>
  client.post(
    "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/login",
    { userId, password }
  );

export const register = ({ username, userId, password }) =>
  client.post(
    "https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/register",
    { username, userId, password }
  );
