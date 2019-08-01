import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import api from "../../../services/api";
import { login } from "../../../services/auth";

import {
  Container,
  Form,
  Title,
  Input,
  ButtonsWrapper,
  Button,
  Link
} from "../styles";

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Type a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Your password must have at least 6 characters")
    .required("Password is required")
});

const SignUp = ({ history }) => (
  <Container>
    <Formik
      validationSchema={signUpSchema}
      onSubmit={async (values, actions) => {
        console.log("VALUES: ", values);

        try {
          const { data } = await api.post("register", values);

          login(data.token);

          history.push("/app");

          toast.success(`Welcome, ${data.user.name}!`, {
            className: "toast-success"
          });
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong", { className: "toast-error" });
        } finally {
          actions.setSubmitting(false);
        }
      }}
      render={({ isValid, isSubmitting, errors, touched }) => (
        <Form>
          <Title>Sign Up</Title>
          <Input
            name="name"
            label="Name"
            placeholder="your name..."
            error={touched.name ? errors.name : null}
          />
          <Input
            name="email"
            label="Email"
            placeholder="your email..."
            error={touched.email ? errors.email : null}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="your password..."
            error={touched.password ? errors.password : null}
          />
          <ButtonsWrapper>
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
            >
              Submit
            </Button>
            <Link to="/signin">I already have an account</Link>
          </ButtonsWrapper>
        </Form>
      )}
    />
  </Container>
);

export default SignUp;
