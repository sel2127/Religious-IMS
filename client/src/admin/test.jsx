import axios from 'axios';
// ... other imports

const EventUpload = () => {
  // ... existing code

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

  // ... existing code

  return (
    // ... existing JSX
  );
};

export default EventUpload;