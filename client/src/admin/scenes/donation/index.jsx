import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from 'axios';

const Donation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [donations, setDonations] = useState([]);
  
  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donation'); // Adjust the endpoint path
      console.log('Fetched donations:', response.data);
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };
  

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "user_id", headerName: "User ID" }, // Added user_id field
    { field: "first_name", headerName: "First Name", flex: 1 },
    { field: "last_name", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "tx_ref", headerName: "Reference", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "currency", headerName: "Currency", flex: 1 },
    { field: "createdAt", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header
        title="DONATIONS"
        subtitle="List of Donations"
      />
     <Box
  m="40px 0 0 0"
  height="75vh"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    "& .MuiTypography-body1": {
      fontSize: "1.5rem", // Adjust the font size as needed
      textAlign: 'center', // Center align the text
    },
  }}
>
  {donations.length > 0 ? (
    <DataGrid
      checkboxSelection
      rows={donations}
      columns={columns}
    />
  ) : (
    <Typography variant="body1">No donations found</Typography>
  )}
</Box>

    </Box>
  );
}

export default Donation;
