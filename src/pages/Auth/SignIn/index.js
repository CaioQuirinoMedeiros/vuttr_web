import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { login } from '../../../services/auth';

import {
  Container,
  Form,
  Title,
  Input,
  ButtonsWrapper,
  Button,
  Link,
} from '../styles';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('That is is not a valid email')
    .required('Fill in your email'),
  password: Yup.string().required('Fill in your password'),
});

const SignIn = ({ history }) => (
  <Container>
    <Formik
      validationSchema={signInSchema}
      validateOnBlur={false}
      onSubmit={async (values, actions) => {
        try {
          const { data } = await api.post('login', values);

          login(data.token);

          history.push('/app');

          toast.success(`Welcome, ${data.user.name}!`, {
            className: 'toast-success',
          });
        } catch (err) {
          toast.error('Invalid credentials', { className: 'toast-error' });
        } finally {
          actions.setSubmitting(false);
        }
      }}
      render={({ isValid, isSubmitting, errors, touched }) => (
        <Form>
          <Title>Sign In</Title>
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
              Login
            </Button>
            <Link to="/signup">Sign up for free</Link>
          </ButtonsWrapper>
        </Form>
      )}
    />
  </Container>
);

export default SignIn;
