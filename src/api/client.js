import axios from "axios";

const client = axios.create();

client.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.data.statusCode != 200) {
      throw Error;
    } else {
      return response;
    }
  },
  (error) => {
    console.log(error);
    if (error.response && error.response.data.statusCode === 401) {
      console.error("Unauthorized"); // 에러 메시지를 콘솔에 출력하거나 사용자에게 알림을 표시할 수 있습니다.
    }
    return Promise.reject(error);
  }
);

export default client;
