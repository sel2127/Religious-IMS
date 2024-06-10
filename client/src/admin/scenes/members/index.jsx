import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from 'axios';

const Membership = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/members'); 
      //console.log('Fetched donations:', response.data);
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };


  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "userId", headerName: "User ID" }, // Added user_id field
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    // { field: "bapiname", headerName: "yekrstan sm", flex: 1 },
    // { field: "fathername", headerName: "ye nsha abat", flex: 1 },
    { field: "adress", headerName: "Address", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "createdAt", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header
        title="Members List"
        subtitle="List of members"
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
            fontSize: "1.5rem", 
            textAlign: 'center', 
          },
          "& .MuiDataGrid-root": {
            width: '100%', 
          }
        }}
      >
        {members.length > 0 ? (
          <DataGrid
            checkboxSelection
            rows={members}
            columns={columns}
          />
        ) : (
          <Typography variant="body1">No members found</Typography>
        )}
      </Box>


    </Box>
  );
}

export default Membership;