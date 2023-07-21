import React, { useEffect } from "react";
import {
  Container,
  Rectangle23,
  Rectangle3,
  StartText,
  TextContainer,
} from "../components/landing/landing";
import { Responsive } from "../components/Responsive";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StartLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Home = () => {
  const getTokenFromUrl = () => {
    const search = window.location.hash.substring(1); // 쿼리 부분 가져오기
    const params = new URLSearchParams(search); // URLSearchParams 객체 생성
    let accessToken = params.toString().split("=");
    accessToken = accessToken[1].split("&")[0];
    console.log(accessToken);
    return accessToken;
  };
  useEffect(() => {
    if (window.location.hash.substring(1)) {
      console.log("this is what we derived from url", getTokenFromUrl());
      const spotifyToken = getTokenFromUrl();
      // window.location.hash = "";
      console.log(spotifyToken);
      if (spotifyToken) {
        localStorage.setItem("SPOTIFY", spotifyToken);
        window.location.href = "/";
      }
    }
  });

  return (
    <Responsive>
      <Container>
        <Rectangle23 />
        <TextContainer>
          <span>
            안녕하세요,
            <br />
            원하시는 곡을
            <br />
            신청해 주시겠어요?
          </span>
        </TextContainer>
        <Rectangle23 />
        <Rectangle3>
          <StartText>
            <StartLink to={"/stores"}>
              <span>네 지금 바로 시작해요 🙌</span>
            </StartLink>
          </StartText>
        </Rectangle3>
      </Container>
    </Responsive>
  );
};

export default Home;
