import React from "react";
import logo from "../../assets/img/logo.jpg";
import {
  Form,
  Image,
  InputWrapper,
  LoginWrapper,
  OR,
  SignUp,
} from "./Register.style";
import { Anchor, Button, Input, PasswordInput, Text } from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons";
import { Controller, useForm } from "react-hook-form";

const Register = () => {
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
            name="email"
            control={control}
            render={(...field) => (
              <Input
                {...field}
                {...register("email")}
                placeholder="Email"
                autoComplete="off"
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="fullname"
            control={control}
            render={(...field) => (
              <Input
                {...field}
                {...register("name")}
                placeholder="Full name"
                error={errors.name?.message}
                autoComplete="off"
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            render={(...field) => (
              <Input
                {...field}
                {...register("name")}
                placeholder="Username"
                error={errors.username?.message}
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
        <Button type="submit">Sign Up</Button>
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
          Already have an account? <Anchor href=''>Log In.</Anchor>
        </Text>
      </SignUp>
    </LoginWrapper>
  );
};

export default Register;
