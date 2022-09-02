import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  gap: 30px;
`;

export const Image = styled.img`
width: 210px;
color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  width: 290px;
  height: 35px;
  font-size: 16px;
  background-color: rgb(52, 110, 235);
  color: white;
  border: none;
  border-radius: 2px;

  &:nth-child(2) {
    background-color: inherit;
    color: rgb(52, 67, 235);
  }
`;
