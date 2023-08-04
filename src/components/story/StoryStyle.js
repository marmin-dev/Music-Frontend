import { keyframes, styled } from "styled-components";
import { ImgDiv, ItemTextDiv } from "../store/StoreStyle";

export const StoryListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;

export const StoryListItemDiv = styled.div`
  //음악: 사연이 없을 경우
  display: flex;
  flex-direction: row;
  // min-height: 20%;
  background-color: #fff;

  width: 95%;
  height: 15%;
  border: 1px solid lightgray;
  border-radius : 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const StoryListItemDiv2 = styled.div`
  //음악:사연이 있을 경우
  display: flex;
  flex-direction: row;
  // min-height: 20%;
  // background-color: rgba(106, 224, 204);
  // background-image: linear-gradient(rgba(106, 224, 204), rgba(200, 224, 204, 0.5));

  width: 95%;
  height: 15%;
  border: 1px solid lightgray;
  border-radius : 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
  margin-bottom: 3px;


  &:hover {
    background-color: rgba(106, 224, 204);
    box-shadow: 0px 2.98256px 7.4564px 2.98256px rgba(0, 0, 0, 0.2);
  }
`;

export const ImgDiv2 = styled(ImgDiv)`
  width: 20%;
`;

export const ImgDivSpecial = styled(ImgDiv)`
  width: 26.66%;
  display: flex;
  flex-direction: column;
`;

export const ItemTextDiv2 = styled(ItemTextDiv)`
  width: 80%;
`;

export const PlayListDiv = styled(StoryListItemDiv2)`
  height: 10%;
`;

export const StoryPlayListDiv = styled(StoryListItemDiv2)`
  height: 7%;
`;

export const StoryDetailDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  /* overflow-y: scroll; */
`;

export const StoryContentDiv = styled.div`
  width: 99%;
  // height: 328px;
  min-height: 20vh;
  // background: linear-gradient(to bottom, #fff, rgba(26, 227, 204, 1));
  word-break: break-all;
  // padding: 1%;
  font-size: 20px;
  overflow-y: scroll;
  margin: 0px;
  padding-bottom: 1vh;
  padding-top: 1vh;
`;


export const StoryContentInner = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  // border-bottom: 0.01px solid lightgray;

  margin-left: auto;
  margin-right: auto;
`;

export const BtnContentInner = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  // border-top: 0.01px solid rgb(0,0,0, 0.1);
  // border-bottom: 0.01px solid lightgray;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

export const CommentContentInner = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  // border-top: 0.01px solid rgb(0,0,0, 0.1);

  // padding-left: 2px;
  // padding-right: 2px;
`;

export const ArtistP = styled.p`
  margin: 0px;
  padding: 0px;
  color: gray;
`;

export const Songp = styled(ArtistP)`
  color: black;
`;

export const CommentBtnDiv = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  // border-top: 1px solid lightgray;
  // border-bottom: 1px solid lightgray;

  // box-shadow: 0px 2.98256px 7.4564px 2.98256px rgba(0, 0, 0, 0.1);
  border-top: 0.01px solid rgb(0,0,0, 0.1);
`;

export const CommentImage = styled.img`
  height: 50%;
  padding-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const CommentADiv = styled(CommentBtnDiv)`
  height: 5%;
  border-top: none;
`;

export const CommentItemDiv = styled.div`
  /* height: 5%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  /* background-color: red; */
  word-break: break-all;
  margin: 2px;
  // border-top: 1px solid lightgray;
  
  // padding-left: auto;
  // padding-right: auto;
  margin-left: auto;
  margin-right: auto;
  
  // border-bottom: 1px solid rgb(0,0,0, 0.1);
  // box-shadow: 0px 2.98256px 7.4564px 2.98256px rgba(0, 0, 0, 0.1);
`;

export const CommentAuthor = styled.p`
  font-weight: bold;
  margin-right: 10px;
  height: 100%;
  width: fit-content;
  min-width: fit-content;
  display: flex;
  align-items: center;
`;
export const CommentForm = styled.form`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
`;

export const CommentInput = styled.input`
  border: none;
  background-color: lightgray;
  width: 80%;
  height: 20px;
  border-radius: 5px;
`;

export const CommentBtn = styled.button`
  height: 20px;
  border: none;
  width: 20%;
  background-color: rgba(26, 227, 204, 1);
  border-radius: 5;
`;

export const StoryCreateForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;
export const StoryTextArea = styled.textarea`
  width: 90%;
  background-color: lightgrey;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  height: 70%;
`;
export const ImgDiv3 = styled(ImgDiv2)`
  height: 90%;
`;
export const FormUserNameDiv = styled(CommentItemDiv)`
  border-bottom: 1px solid lightgray;
`;

export const EmotionBtn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const TextDiv = styled.div`
  height: 40%;
  width: 90%;
  background-color: lightgrey;
  overflow-y: scroll;
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 이미지 스타일드 컴포넌트 정의
export const LoadingImg = styled.img`
  width: 30%;
  animation: ${rotateAnimation} 4s linear infinite;
`;
