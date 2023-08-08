import axios from "axios";

// 회원 탈톼하기
export const deleteUser = async () => {
  const id = localStorage.getItem("userId");
  const response = await axios.delete(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/user/${id}`
  );
  console.log(response);
  localStorage.clear();
  alert("탈퇴가 완료되었습니다.");
  window.location.href = "/";
};

export const getUserRef = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(
    `https://3a489exprb.execute-api.ap-northeast-1.amazonaws.com/music-api/user/ref/${id}`
  );
  return res.data;
};
