import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  input {
    background-color: rgb(15, 15, 15);
    color: white;
    border: none;
  }
`;

export const Image = styled.img`
  width: 170px;
`;
export const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const OR = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  gap: 2px;
  hr {
    width: 43%;
    border: 1px solid rgb(129, 130, 122);
  }
`;

export const SignUp = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid rgb(129, 130, 122);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(129, 130, 122);
  font-size: 15px;
  position: fixed;
  bottom: 0;
`;
