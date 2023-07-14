import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  height: 2vh;
  width: 75%;
  border-radius: 5px;
  background-color: lightgray;
  border: none;
`;

export const Button = styled.button`
  background-color: rgba(26, 227, 204, 1);
  width: 80%;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  height: 5vh;
  margin-top: 5px;
  &:hover {
    background-color: rgba(26, 255, 220, 1);
  }
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: rgba(26, 227, 204, 1);
`;

export const LoginLogo = styled.img`
  width: 80%;
`;
export const SpaceDiv = styled.div`
  height: 5%;
`;
