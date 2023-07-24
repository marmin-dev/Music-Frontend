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
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 20%;
  border: 1px solid lightgray;
  background-color: #fff;
`;

export const StoryListItemDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 20%;
  border: 1px solid lightgray;
  background-color: rgba(26, 227, 204, 1);
`;

export const ImgDiv2 = styled(ImgDiv)`
  width: 20%;
`;

export const ItemTextDiv2 = styled(ItemTextDiv)`
  width: 80%;
`;
