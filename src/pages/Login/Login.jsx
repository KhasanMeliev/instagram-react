import React from "react";
import logo from "../../assets/img/logo.jpg";
import {
  Form,
  Image,
  InputWrapper,
  LoginWrapper,
  OR,
  SignUp,
} from "./Login.style";
import { Button, Input, PasswordInput, Text, TextInput } from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginWrapper>
      <Image src={logo} alt="logo" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Controller
            name="name"
            control={control}
            render={(...field) => (
              <Input
                {...field}
                type="text"
                {...register("name")}
                placeholder="Username"
                autoComplete="off"
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={(...field) => (
              <PasswordInput
                {...field}
                {...register("password")}
                placeholder="Password"
                error={errors.password?.message}
                autoComplete="off"
              />
            )}
          />
        </InputWrapper>
        <Button type="submit">Log In</Button>
        <Text color="rgb(129, 130, 122)" size={11} marginTop={20}>
          Forgot your login details? Get help logging in
        </Text>
        <OR>
          <hr />
          <h3>OR</h3>
          <hr />
        </OR>
        <Button
          component="a"
          rel="noopener noreferrer"
          href="#"
          leftIcon={<IconBrandFacebook size={20} />}
        >
          Continue with Facebook
        </Button>
      </Form>
      <SignUp>
        <Text>
          Don't have an account? <span>Sign Up.</span>
        </Text>
      </SignUp>
    </LoginWrapper>
  );
};

export default Login;
