import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import "../../adminCss/admin.css";

const EventUpload = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("eventname", values.eventname);
      formData.append("eventDesc", values.eventDesc);
      formData.append("eventdate", values.eventdate);
      formData.append("image", values.image);

      await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Reset form values after successful upload
      values.eventname = "";
      values.eventDesc = "";
      values.eventdate = null;
      values.image = null;
    } catch (error) {
      console.error(error);
    }
  };

  const checkoutSchema = yup.object().shape({
    eventname: yup.string().required("Required"),
    eventDesc: yup.string().required("Required"),
    image: yup
      .mixed()
      .test("fileSize", "File size should be less than 3MB", (value) => {
        return !value || (value && value.size <= 3000000);
      })
      .test(
        "fileType",
        "Only PNG, JPG, and JPEG files are allowed",
        (value) => {
          return !value || (value && /(png|jpe?g)$/.test(value.type));
        }
      ),
  });

  const initialValues = {
    eventname: "",
    eventDesc: "",
    eventdate: null,
    image: null,
  };

  const CustomDatePicker = ({ values, setFieldValue, handleBlur }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
      setFieldValue("eventdate", date);
    };

    return (
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        onBlur={handleBlur}
        placeholderText="Select Date"
        value={values.eventdate}
        dateFormat="yyyy-MM-dd"
        className="custom-datepicker"
      />
    );
  };

  return (
    <Box m="20px">
      <Header title="Event Upload" subtitle="Upload an Event" />

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
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
                label="Event Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.eventname}
                name="eventname"
                error={!!touched.eventname && !!errors.eventname}
                helperText={touched.eventname && errors.eventname}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Event Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.eventDesc}
                name="eventDesc"
                error={!!touched.eventDesc && !!errors.eventDesc}
                helperText={touched.eventDesc && errors.eventDesc}
                sx={{ gridColumn: "span 4" }}
              />

              <CustomDatePicker
                values={values}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
                name="eventdate"
              />
              <TextField
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
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Upload Event
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EventUpload;
