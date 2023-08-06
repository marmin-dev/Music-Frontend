import { styled } from "styled-components";

export const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const SearchH2 = styled.h2`
  margin: 10px;
  padding: 0px;
`;

export const SearchInputForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SearchInputDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SearchInput = styled.input`
  width: 80%;
  border: none;
  background-color: lightgray;
  height: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  padding-left: 3%;
`;

export const SearchBtn = styled.button`
  background-color: rgba(31, 28, 31, 0.9);
  width: 20%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  &:hover {
    cursor: pointer;
    background-color: rgba(129,216,207);
  }
`;

export const SearchListDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  background-color: lightgray;
  max-height: 50%;
  overflow-y: scroll;
`;

export const SearchListItemDiv = styled.div`
  height: 40px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    background-color: rgba(242, 242, 242, 1);
  }
`;

export const SearchP = styled.p`
  margin: 5px;
`;

export const SongsDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  /* background-color: lightgray; */
  height: 100%;
  overflow-y: scroll;
`;

export const SongItemDiv = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
export const ImgDiv4 = styled.div`
  width: 10%;
  height: 100%;
`;

export const SongImg = styled.img`
  width: 50%;
`;
export const SongImg2 = styled.img`
  width: 85%;
`;
export const SongImg3 = styled.img`
  width: 40%;
  &:hover {
    cursor: pointer;
  }
`;

export const SongTextDiv = styled.div`
  width: 80%;
`;

export const SongText = styled.p`
  padding: 0px;
  margin: 0px;
`;
export const SongRecDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
`;
