import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #000;
  color: white;
  @media (min-width: 350px) {
    width: 100%;
  }
`;
export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;

  svg {
    font-size: 28px;
  }
`;
export const Image = styled.img`
  width: 110px;
`;

export const Message = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 18px;
  height: 18px;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: 15px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
