import { styled } from "styled-components";

export const Responsive = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (min-width: 480px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;
