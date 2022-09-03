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
`;

export const Image = styled.img`
  width: 170px;
`;
export const Form = styled.form`
  width: 90%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px;
  margin-top: 50px;

  p {
    color: rgb(129, 130, 122);
    font-size: 11px;
    span {
      color: white;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 2px;
  background-color: #191919;
  color: white;
  outline: none;
  text-indent: 5px;
`;

export const Button = styled.button`
  width: 95%;
  height: 35px;
  background-color: rgb(31, 40, 153);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 17px;
  margin-top: 18px;
  margin-left: 2px;
  opacity: 0.4;
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

export const FacebookButton = styled.button`
  width: 95%;
  height: 40px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(31, 85, 233, 1) 0%,
    rgba(2, 42, 95, 1) 0%,
    rgba(2, 39, 91, 1) 0%,
    rgba(2, 37, 88, 1) 0%,
    rgba(4, 35, 120, 1) 0%,
    rgba(3, 116, 198, 1) 0%,
    rgba(3, 116, 198, 1) 26%,
    rgba(17, 144, 237, 1) 100%
  );

  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 15px;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 25px;
  }
`;

export const SignUp = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(129, 130, 122);
  color: white;
  position: sticky;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: rgb(129, 130, 122);
    font-size: 13px;
    span {
      color: white;
    }
  }
`;
