import { styled } from "styled-components";
import backImg from "../../img/back.png";

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  padding: 0;
  top: 0;
  width: inherit;
  position: fixed;
  border-bottom: 1px solid lightgray;
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

export const Header = ({ content }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <TopBar>
      <BackButton onClick={handleGoBack}>
        <BackImg src={backImg} />
      </BackButton>
      <Title>{content}</Title>
    </TopBar>
  );
};

export default Header;
