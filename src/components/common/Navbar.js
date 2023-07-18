import { Link } from "react-router-dom";
import { styled } from "styled-components";

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

const Navbar = () => {
  return (
    <NavDiv>
      <NavItem>
        <STLink to={"/stores"}>
          <NavImg src="img/home.png" />
        </STLink>
      </NavItem>
      <NavItem>
        <STLink>
          <NavImg src="img/search.png" />
        </STLink>
      </NavItem>
      <NavItem>
        <STLink>
          <NavImg src="img/write.png" />
        </STLink>
      </NavItem>
      <NavItem>
        <STLink>
          <NavImg src="img/play.png" />
        </STLink>
      </NavItem>
      <NavItem>
        <STLink>
          <NavImg src="img/user.png" />
        </STLink>
      </NavItem>
    </NavDiv>
  );
};

export default Navbar;
