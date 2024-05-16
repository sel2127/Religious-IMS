import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import axios from "axios";

const Forgot = () => {
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Enter verification code
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const initialValues = {
    email: "",
    verificationCode: "",
    password: "",
    confirmPassword: "",
  };

  const schemaStep1 = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const schemaStep2 = yup.object().shape({
    verificationCode: yup.string().required("Verification code is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleFormSubmit = async (values) => {
    if (step === 1) {
      try {
        const response = await axios.post('http://localhost:5000/admin/forgot', { email: values.email });
        // Assuming the backend sends a verification code to the email
        setStep(2);
        setEmail(values.email);
      } catch (error) {
        console.error('Error:', error);
      }
    } else if (step === 2) {
      try {
        const response = await axios.post('http://localhost:5000/admin/reset', { email, verificationCode: values.verificationCode, password: values.password });
        // Assuming the backend resets the password for the email
        // Redirect to login page or any other desired page
        window.location.href = '/login';
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Box
      m="100px"
      width="50%"
      padding="20px"
      border="1px solid"
      borderRadius="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginX="auto"
    >
      <Header
        title={step === 1 ? "FORGOT PASSWORD" : "RESET PASSWORD"}
        subtitle={step === 1 ? "Enter your email to reset your password" : "Enter the verification code and set a new password"}
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={step === 1 ? schemaStep1 : schemaStep2}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="30px"
                width="100%"
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Box>
            )}

            {step === 2 && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="30px"
                width="100%"
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Verification Code"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.verificationCode}
                  name="verificationCode"
                  error={!!touched.verificationCode && !!errors.verificationCode}
                  helperText={touched.verificationCode && errors.verificationCode}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="New Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Box>
            )}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              // disabled={!values.email || !values.verificationCode || !values.password || !values.confirmPassword}
            >
              {step === 1 ? "Next" : "Reset Password"}
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Forgot;