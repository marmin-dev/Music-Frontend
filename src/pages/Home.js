import React, { useEffect } from "react";
import {
  Container,
  Rectangle23,
  Rectangle3,
  RectangleBottom,
  StartText,
  TextContainer,
} from "../components/landing/landing";
import { Responsive } from "../components/Responsive";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import EntranceSliding from "../components/landing/EntranceSliding";


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
    <div className="ResponsiveBackground">
      <EntranceSliding />
      <div className="Entrance">
        <RectangleBottom>
          <StartText>
            <StartLink to={"/stores"}>
              <span className="Enter">시작하기</span>
            </StartLink>
          </StartText>
        </RectangleBottom>
      </div>
    </div>
  );
};

export default Home;
