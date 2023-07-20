import { styled } from "styled-components";
import { BackButton, BackImg, Title, TopBar } from "./HeadBar";
import { Link } from "react-router-dom";
import backImg from "../../img/back.png";
import plusImg from "../../img/plus.png";

const TitlePlus = styled(Title)`
  transform: none;
`;

const HeaderPlus = ({ content }) => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <TopBar>
      <BackButton onClick={handleGoBack}>
        <BackImg src={backImg} />
      </BackButton>
      <TitlePlus>{content}</TitlePlus>
      <BackButton>
        {localStorage.getItem("token") ? (
          <Link to={"/store/create"}>
            <BackImg src={plusImg} />
          </Link>
        ) : (
          <Link to={"/login"}>
            <BackImg src={plusImg} />
          </Link>
        )}
      </BackButton>
    </TopBar>
  );
};

export default HeaderPlus;
