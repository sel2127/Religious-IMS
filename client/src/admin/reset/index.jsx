import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const Reset = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { token } = useParams();

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post(`http://localhost:5000/admin/reset/${token}`, values);
      setMessage(response.data.message);
      navigate('/admin/login');
    } catch (error) {
      setError(error.response.data.message);
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
      <Header title="Reset Password" subtitle="Enter your new password" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
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
      {message && (
        <Box mt={2}>
          <Typography color="success">{message}</Typography>
        </Box>
      )}
    </Box>
  );
};

const resetPasswordSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
});

const initialValues = {
  password: "",
  confirmPassword: "",
};

export default Reset;