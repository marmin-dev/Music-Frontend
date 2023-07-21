import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import homeImg from "../../img/home.png";
import searchImg from "../../img/search.png";
import writeImg from "../../img/write.png";
import playImg from "../../img/play.png";
import userImg from "../../img/user.png";

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: inherit;
  position: fixed;
  bottom: 0;
  border-top: 1px solid lightgray;
`;
const NavItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavImg = styled.img`
  width: 50%;
`;
const STLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = ({ to }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <NavDiv>
      <NavItem>
        <STLink to={"/stores"}>
          <NavImg src={homeImg} />
        </STLink>
      </NavItem>
      <NavItem>
        <STLink>
          <NavImg src={searchImg} />
        </STLink>
      </NavItem>
      <NavItem>
        {token || token !== null ? (
          <STLink to={to}>
            <NavImg src={writeImg} />
          </STLink>
        ) : (
          <STLink to={"/login"}>
            <NavImg src={writeImg} />
          </STLink>
        )}
      </NavItem>
      <NavItem>
        <STLink>
          <NavImg src={playImg} />
        </STLink>
      </NavItem>
      <NavItem>
        {token || token !== null ? (
          <STLink to={"/mypage"}>
            <NavImg src={userImg} />
          </STLink>
        ) : (
          <STLink to={"/login"}>
            <NavImg src={userImg} />
          </STLink>
        )}
      </NavItem>
    </NavDiv>
  );
};

export default Navbar;
