import { styled } from "styled-components";

export const Entrance = styled.div`
  background-image: url("./img/logo3.png");
  width: 100vw;
  background-size : auto;
  background-repeat : no-repeat;
  background-position: center center;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(106, 224, 204);
  @media (min-width: 480px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;