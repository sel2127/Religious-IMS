import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Typography,
  useTheme
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    image: null,
  });
  
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    currentPassword: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const fetchUserData = async () => {
    try {
      const token = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('admin_token='))
        .split('=')[1];
  
      if (!token) {
        // Handle case where token is not found
        console.error('Token not found');
        return;
      }
  
      // Include the token in the request headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      const response = await axios.get('http://localhost:5000/admin/profile');

      const userData = response.data;
      setInitialValues({
  firstname: userData.firstname || "",
  lastname: userData.lastname || "",
  email: userData.email || "",
  phone: userData.phone || "",
});
      console.log(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  
  useEffect(() => {
    if (initialValues !== null) {
      // Set the form data when initial values are available
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('admin_token='))
        .split('=')[1];

      const endpoint = 'http://localhost:5000/admin/update';
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const formDataToSend = new FormData();
      formDataToSend.append('firstname', formData.firstname);
      formDataToSend.append('lastname', formData.lastname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('currentPassword', formData.currentPassword);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('image', formData.image);

      const response = await axios.put(endpoint, formDataToSend, config);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating admin profile:', error);
    }
  };

  return (
    <Box m="20px">
      <Header title="UPDATE ADMIN" subtitle="Update Admin Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={formData}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.firstname}
                name="firstname"
                error={!!touched.firstname && !!errors.firstname}
                helperText={touched.firstname && errors.firstname}
                sx={{ gridColumn: "span 2" }}
              />
              <ErrorMessage name="firstname" component={Typography} color="error" />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.lastname}
                name="lastname"
                error={!!touched.lastname && !!errors.lastname}
                helperText={touched.lastname && errors.lastname}
                sx={{ gridColumn: "span 2" }}
              />
              {/* <ErrorMessage name="firstname" component={Typography} color="error" /> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="file"
                label="Image"
                inputProps={{ accept: ".png, .jpg, .jpeg" }}
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                name="image"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx={{ gridColumn: "span 4" }}
              /> */}
              <input
              type="file"
              name="image"
              onChange={handleImageChange}
              />

              <Typography variant="h3" color={colors.grey[100]} sx={{ gridColumn: "span 4" }}>
                  Change Password
                </Typography>
                <TextField
  fullWidth
  variant="filled"
  type="password"
  label="Current Password"
  onBlur={handleBlur}
  onChange={handleChange}
  value={formData.currentPassword}
  name="currentPassword"
  error={!!touched.currentPassword && !!errors.currentPassword}
  helperText={touched.currentPassword && errors.currentPassword}
  sx={{ gridColumn: "span 4" }}
/>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ gridColumn: "span 2" }}
              />
{/* {successMessage && (
              <Typography style={{ color: "green" }}>
                {successMessage}
              </Typography>
            )} */}

{/* {errorMessage && (
              <Typography style={{ color: "red" }}>
                {errorMessage}
              </Typography>
            )} */}

        

              {/* access control */}
              {/* <FormControl fullWidth variant="filled">
                <InputLabel id="access-level-label">Access Level</InputLabel>
                <Select
                  labelId="access-level-label"
                  fullWidth
                  variant="filled"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.accessLevel}
                  name="accessLevel"
                  error={!!touched.accessLevel && !!errors.accessLevel}
                  helperText={touched.accessLevel && errors.accessLevel}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value="">Select Access Level</MenuItem>
                  <MenuItem value="level1">Level 1</MenuItem>
                  <MenuItem value="level2">Level 2</MenuItem>
                  <MenuItem value="level3">Level 3</MenuItem>
                </Select>
              </FormControl> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Update Profile
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const initialValues = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   phone: '',
//   password: '',
//   confirmPassword: '',
//   image: null,
//   currentPassword: '',
// };

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstname: yup.string(),
  lastname: yup.string(),
  email: yup.string().email("invalid email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    ,
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    ,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    ,
  image: yup
    .mixed()
    .test("fileSize", "Image size should be less than 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB
    })
    .test("fileType", "Only JPG, JPEG, and PNG file types are allowed", (value) => {
      return value && /(image\/jpeg|image\/jpg|image\/png)/.test(value.type);
    })
    .required("Please select an image"),
    currentPassword: yup
    .string(),
});

export default Form;