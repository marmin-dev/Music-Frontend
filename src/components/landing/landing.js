import styled from "styled-components";


export const Container = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;3
  align-items: center;
  justify-content: center;
`;

export const Rectangle23 = styled.div`
  background-color: rgba(255, 255, 255, 1);
`;

export const TextContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  cololr: black;
  font-size: 100px;
  margin-bottom: 30px;
`;

export const Rectangle3 = styled.div`
  &:hover {
    background-color: rgba(26, 255, 220, 1);
  }
  background-color: rgba(26, 227, 204, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 1vh;
`;

export const RectangleBottom = styled.div`
  // &:hover {
  //   background-color: rgba(115, 115, 220, 1);
  // }
  // background-color: rgba(227, 223, 212);
  // background-color: rgba(172, 169, 162);
  background-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  height: 9vh;
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-radius: 3vh;
  position: relative;
  bottom: -5vh;
  // margin-left: auto;
  // margin-right: auto;
  // opacity: 0.9;
`;

export const StartText = styled.div`
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8em;
  color: rgba(44, 44, 44, 1);
  // color: white;
  // bottom: 5vh;
`;
