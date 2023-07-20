import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;

export const ItemImg = styled.img`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgDiv = styled.div`
  width: 15%;
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
