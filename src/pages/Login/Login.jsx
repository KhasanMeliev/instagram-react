import React from "react";
import logo from "../../assets/img/logo.jpg";
import {
  Button,
  FacebookButton,
  Form,
  Image,
  Input,
  InputWrapper,
  LoginWrapper,
  OR,
  SignUp,
} from "./Login.style";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <LoginWrapper>
      <Image src={logo} alt="logo" />
      <Form>
        <InputWrapper>
          <Input type="text" placeholder="Phone number, username or email" />
          <Input type="password" placeholder="Password" />
        </InputWrapper>
        <Button>Log In</Button>
        <p>
          Forgot your login details? <span>Get help logging in</span>
        </p>
        <OR>
          <hr />
          <h3>OR</h3>
          <hr />
        </OR>
        <FacebookButton>
          <FaFacebook /> Continue as coding_khasan
        </FacebookButton>
      </Form>

      <SignUp>
        <p>
          Don't have an account? <span>Sign Up.</span>
        </p>
      </SignUp>
    </LoginWrapper>
  );
};

export default Login;
