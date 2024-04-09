import React from 'react';
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

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/admin/login", values);
      const token = response.data.token;
      
      // Store the token in local storage or session storate
      localStorage.setItem("token", token);

      // Redirect to a protected route
      window.location.href= "/admin/dashboard";
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      m="100px"
      width="50%" // Updated width to be half of the screen
      padding="20px"
      border="1px solid"
      borderRadius="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginX="auto" // Added marginX:auto to center the box horizontally
    >
      <Header title="LOGIN" subtitle="Sign In to Your Account" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={loginSchema}
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

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Login
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default Login;