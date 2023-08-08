import { styled } from "styled-components";
import backImg from "../../img/back.png";

export const StoryTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  padding: 0;
  top: 0;
  width: inherit;
  position: fixed;
  border-bottom: 0.01px solid rgb(0,0,0, 0.1);
  // box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 10%;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  flex: 1;
  padding: 0px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-30px);
`;

export const BackImg = styled.img`
  width: 70%;
`;

export const StoryHeader = ({ content }) => {
  const handleGoBack = () => {
    window.history.back();
  };
  
  return (
    <StoryTopBar>
      <BackButton onClick={handleGoBack}>
        <BackImg src={backImg} />
      </BackButton>
      <Title>{content}</Title>
    </StoryTopBar>
  );
};

export default StoryHeader;