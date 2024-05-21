import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from 'axios';
import { saveAs } from 'file-saver';
import { write, utils } from 'xlsx'; // Import 'utils' from 'xlsx'

const Donation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [reportGenerating, setReportGenerating] = useState(false);
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

  const handleGenerateReport = async () => {
    try {
      setReportGenerating(true);
  
      // Fetch donations from the backend
      const response = await axios.get('http://localhost:5000/api/donation');
      const donations = response.data;
  
      // Generate the report data
      const reportData = donations.map((donation) => ({
        ID: donation.id,
        User_ID: donation.user_id,
        'First Name': donation.first_name,
        'Last Name': donation.last_name,
        'Email': donation.email,
        'Reference': donation.tx_ref,
        'Amount': donation.amount,
        'Currency': donation.currency,
        'Date': donation.createdAt, // Adjust if needed
      }));
  
      // Create a new workbook and worksheet
      const workbook = utils.book_new();
      const worksheet = utils.json_to_sheet(reportData);
  
      // Add the worksheet to the workbook
      utils.book_append_sheet(workbook, worksheet, 'Donations');
  
      // Generate the Excel file
      const excelBuffer = write(workbook, { type: 'array', bookType: 'xlsx' });
  
      // Create a file blob from the buffer
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      // Save the file using file-saver
      saveAs(blob, 'donation_report.xlsx');
  
      setReportGenerating(false);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };
  

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "user_id", headerName: "User ID" },
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
      <Box display="flex" justifyContent="end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerateReport}
          disabled={reportGenerating}
        >
          {reportGenerating ? 'Generating...' : 'Generate Report'}
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          "& .MuiTypography-body1": {
            fontSize: "1.5rem", 
            textAlign: 'center', 
          },
          "& .MuiDataGrid-root": {
            width: '100%', 
          }
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
