import React from "react";
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
