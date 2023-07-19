import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ItemDiv = styled.div`
  border-top: 1px solid lightgray;
  /* border-bottom: 1px solid lightgray; */
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyPageLink = styled(Link)`
  text-decoration: none;
  color: gray;
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
`;

export const MyPageOutLink = styled(Link)`
  text-decoration: none;
  color: red;
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
`;

export const LastItemDiv = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserDeleteModal = styled.div`
  position: fixed;
  z-index: 1;
  background-color: lightgray;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  bottom: 0px;
  height: 30%;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBtn = styled.button`
  width: 80%;
  height: 20%;
  border: none;
  color: black;
  font-size: 16px;
  margin: 10px;
  border-radius: 40px;
  background-color: rgba(250, 250, 250, 1);
`;

export const ModalP = styled.p`
  color: black;
`;

export const UserNameH2 = styled.h2``;
