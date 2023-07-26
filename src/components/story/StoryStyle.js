import { styled } from "styled-components";
import { ImgDiv, ItemTextDiv } from "../store/StoreStyle";

export const StoryListDiv = styled.div`
  width: 99.5%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;

export const StoryListItemDiv = styled.div`
  width: 99;
  display: flex;
  flex-direction: row;
  height: 20%;
  border: 1px solid lightgray;
  min-height: 20%;
  background-color: #fff;
`;

export const StoryListItemDiv2 = styled.div`
  width: 99%;
  display: flex;
  flex-direction: row;
  height: 20%;
  min-height: 20%;
  border: 1px solid lightgray;
  background-color: rgba(26, 227, 204, 1);
`;

export const ImgDiv2 = styled(ImgDiv)`
  width: 20%;
`;

export const ItemTextDiv2 = styled(ItemTextDiv)`
  width: 80%;
`;

export const PlayListDiv = styled(StoryListItemDiv2)`
  height: 10%;
`;

export const StoryDetailDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  /* overflow-y: scroll; */
`;

export const StoryContentDiv = styled.div`
  width: 99%;
  height: 328px;
  min-height: 328px;
  background: linear-gradient(to bottom, #fff, rgba(26, 227, 204, 1));
  word-break: break-all;
  padding: 1%;
  font-size: 20px;
  overflow-y: scroll;
  margin: 0px;
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
  border: 1px solid lightgray;
`;

export const CommentImage = styled.img`
  height: 70%;
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
  width: 100%;
  /* background-color: red; */
  word-break: break-all;
  margin: 2px;
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
