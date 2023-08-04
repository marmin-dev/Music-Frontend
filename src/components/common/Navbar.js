import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import homeImg from "../../img/home7.png";
import searchImg from "../../img/search7.png";
import writeImg from "../../img/write7.png";
import playImg from "../../img/play4.png";
import userImg from "../../img/user6.png";

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 8%;
  width: inherit;
  position: fixed;
  bottom: 0;
  // border-top: 1px solid lightgray;

  box-shadow: 0px 2.98256px 7.4564px 2.98256px rgba(0, 0, 0, 0.1);
`;
const NavItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavImg = styled.img`
  width: 40%;
`;
const STLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Navbar = ({ to, toSong }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <NavDiv>
      <NavItem>
        <STLink to={"/stores"}>
          <NavImg src={homeImg} />
        </STLink>
      </NavItem>
      <NavItem>
        {token ? (
          <STLink to={`/song`}>
            <NavImg src={searchImg} />
          </STLink>
        ) : (
          <STLink to={`/login`}>
            <NavImg src={playImg} />
          </STLink>
        )}  

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
      {toSong ? (
        <NavItem>
          {token ? (
            <STLink to={`/song/request/${toSong}`}>
              <NavImg src={playImg} />
            </STLink>
          ) : (
            <STLink to={`/login`}>
              <NavImg src={playImg} />
            </STLink>
          )}
        </NavItem>
      ) : (
        <NavItem>
          {token ? (
            <STLink to={`/song`}>
              <NavImg src={playImg} />
            </STLink>
          ) : (
            <STLink to={`/login`}>
              <NavImg src={playImg} />
            </STLink>
          )}
        </NavItem>
      )}
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
