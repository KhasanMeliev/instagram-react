import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    font-size: 26px;
    color: white;

    &:active {
      font-size: 30px;
    }
  }
`;
