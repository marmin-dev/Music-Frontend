import { LoadingDiv, LoadingImg } from "./StoryStyle";
import loadingImg from "../../img/loading.png";

function StoryLoading() {
  return (
    <LoadingDiv>
      <h1>사연을 분석중입니다...</h1>
      <LoadingImg src={loadingImg} />
    </LoadingDiv>
  );
}

export default StoryLoading;
