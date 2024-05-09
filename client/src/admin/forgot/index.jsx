import React, { useState } from 'react';
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

const Forgot = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState('');
  
    const handleFormSubmit = async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/admin/forgot', values);
        const { success, message } = response.data;
  
        if (success) {
          setEmailSent(true);
        } else {
          setError(message);
        }
      } catch (error) {
        console.error('Error sending reset password email:', error);
      }
    };
  
    const initialValues = {
      email: "",
    };
  
    const schema = yup.object().shape({
      email: yup.string().email("Invalid email").required("Email is required"),
    });
  
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
        <Header title="FORGOT PASSWORD" subtitle="Enter your email to reset your password" />
  
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={schema}
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
  
        {emailSent && (
          <Typography variant="body1" color="textSecondary" mt={2}>
            An email with instructions to reset your password has been sent to your email address.
          </Typography>
        )}
  
        {error && (
          <Typography variant="body1" color="error" mt={2}>
            {error}
          </Typography>
        )}
      </Box>
    );
  };

export default Forgot
