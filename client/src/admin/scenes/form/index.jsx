import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = ({admin}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    image: null
  });

  // Fetch the admin data
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        if (admin && admin.id){
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const response = await axios.get(`http://localhost:5000/admin/login/${admin.id}`, config);
        setFormData(response.data);
      }
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };
    fetchAdminData();
  }, [admin]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      };
      const response = await axios.put(`http://localhost:5000/admin/login/${admin.id}`, formData, config);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error updating admin data:', error);
    }
  };

  const handleImageChange = (event) => {
    const {name, value, files } = event.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ... formData, [name]: value });
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
          handleChange,
          handleSubmit,
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
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
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
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ gridColumn: "span 2" }}
              />

<input
        accept="image/jpeg, image/jpg, image/png"
        id="image-upload"
        type="file"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <label htmlFor="image-upload">
        <Button component="span" color="primary" variant="contained">
          Upload Image
        </Button>
      </label>
        

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
                Update Info
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("required"),
  image: yup
    .mixed()
    .test("fileSize", "Image size should be less than 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB
    })
    .test("fileType", "Only JPG, JPEG, and PNG file types are allowed", (value) => {
      return value && /(image\/jpeg|image\/jpg|image\/png)/.test(value.type);
    })
    .required("Please select an image"),
});

export default Form;