import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
    color: blue;
    margin-left: 165px;
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
  background-color: blue;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 20px;
`;
export const With = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  margin-top: -100px;
  h3 {
    font-size: 15px;
    font-weight: 400;
    span {
      color: blue;
    }
  }
`;
export const WithFacebook = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  p {
    color: blue;
  }
  svg {
    color: blue;
  }
`;

export const OR = styled.div`
  width: 90%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    width: 40%;
  }
`;
