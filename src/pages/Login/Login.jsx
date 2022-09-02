import React from "react";
import logo from "../../assets/img/logo.jpg";
import {
  Button,
  Form,
  Image,
  Input,
  InputWrapper,
  LoginWrapper,
  OR,
  With,
  WithFacebook,
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
        <p>Forgot Password?</p>
        <Button>Log In</Button>
      </Form>

      <With>
        <WithFacebook>
          <FaFacebook />
          <p>Log In With Facebook</p>
        </WithFacebook>

        <OR>
          <hr />
          <p>OR</p>
          <hr />
        </OR>
        <h3>
          Don't have an account? <span>Sign Up</span>
        </h3>
      </With>
    </LoginWrapper>
  );
};

export default Login;
