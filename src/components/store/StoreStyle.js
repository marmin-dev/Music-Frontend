import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  // height: 10%;
  justify-content: center;
  // border-bottom: 1px solid lightgray;

  height: 20%;
  border: 1px solid lightgray;
  border-radius : 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width:90%;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemImg = styled.img`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemTextDiv = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
export const ItemDesc = styled.p`
  color: black;
  margin: 0px;
`;
export const StoreH2 = styled.h2`
  margin: 20px;
`;
export const StoreInput = styled.input``;

export const SpotifyDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SpotifyLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
