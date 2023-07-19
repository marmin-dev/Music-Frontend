import axios from "axios";

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
