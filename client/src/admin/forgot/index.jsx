import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import axios from "axios";

const ForgotPassword = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
      // values.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/admin/forgot', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setMessage(error.response.data.message);
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
      <Header title="Forgot Password" subtitle="Enter your email to reset your password" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={forgotPasswordSchema}
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
            <Box display="flex" justifyContent="center" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Reset Password
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {error && (
        <Box mt={2}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}
      <Box display="flex" justifyContent="center" mt="10px">
        <Link to="/admin/login">Back to Login</Link>
      </Box>
    </Box>
  );
};

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const initialValues = {
  email: "",
};

export default ForgotPassword;