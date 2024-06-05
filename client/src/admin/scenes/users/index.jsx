import React, { useState, useEffect } from 'react'
import { Box, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { memberInfo } from "../../data/mockData";
import Header from "../../components/Header";
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { saveAs } from 'file-saver';
// import { utils, write } from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import LineChart from '../../components/LineChart';

const User = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [reportGenerating, setReportGenerating] = useState(false);
  const [users, setUsers] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUserData, setEditUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/user/users');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/users');
      setUsers(response.data.map(user => ({
        ...user,
        id: user.id.toString(), // Ensure ID is a string for DataGrid
      })));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = async (userId) => {
    // Fetch the user data for the specified ID
    try {
      const response = await axios.get(`http://localhost:5000/admin/users/${userId}`);
      const user = response.data;

      setSelectedUser(user);
      setEditUserData({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
      });
      setEditDialogOpen(true);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedUser(null);
    setEditUserData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    });
  };

  const handleEditUserDataChange = (event) => {
    setEditUserData({
      ...editUserData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditUserSave = async () => {
    try {
      const { id } = selectedUser;
      await axios.put(`http://localhost:5000/admin/users/${id}`, editUserData);
      handleEditDialogClose();
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/admin/users/${userId}`);
      fetchUsers(); // Fetch users again to reflect the updated list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // const handleGenerateReport = async () => {
  //   try {
  //     setReportGenerating(true);

  //     // Generate the report data
  //     const reportData = users.map((user) => ({
  //       ID: user.id,
  //       'First Name': user.firstName,
  //       'Last Name': user.lastName,
  //       'Phone Number': user.phone,
  //       'Email': user.email,
  //     }));

  //     // Create a new workbook and worksheet
  //     const workbook = utils.book_new();
  //     const worksheet = utils.json_to_sheet(reportData);

  //     // Add the worksheet to the workbook
  //     utils.book_append_sheet(workbook, worksheet, 'Users');

  //     // Generate the Excel file
  //     const excelBuffer = write(workbook, { type: 'array', bookType: 'xlsx' });

  //     // Create a file blob from the buffer
  //     const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  //     // Save the file using file-saver
  //     saveAs(blob, 'user_report.xlsx');

  //     setReportGenerating(false);
  //   } catch (error) {
  //     console.error('Error generating report:', error);
  //   }
  // };

  const handleGenerateReport = async () => {
    try {
      setReportGenerating(true);
  
      // Generate the report data
      const reportData = users.map((user) => [
        user.id,
        user.firstName,
        user.lastName,
        user.phone,
        user.email,
      ]);
  
      // Create a new PDF document
      const doc = new jsPDF();
  
      // Add the report data to the PDF using jspdf-autotable
      doc.autoTable({
        head: [['ID', 'First Name', 'Last Name', 'Phone Number', 'Email']],
        body: reportData,
      });
  
      // Save the PDF file
      doc.save('user_report.pdf');
  
      setReportGenerating(false);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "edit",
    //   headerName: "Edit",
    //   flex: 0.5,
    //   renderCell: (params) => (
    //     <IconButton
    //       aria-label="edit"
    //       onClick={() => handleEdit(params.row.id)}
    //     >
    //       <EditIcon />
    //     </IconButton>
    //   ),
    // },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.5,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="USERS"
        subtitle="List of Users for Future Reference"
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
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.blueAccent[600],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
        rows={users}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />      
      </Box>

      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            name="firstName"
            value={editUserData.firstName}
            onChange={handleEditUserDataChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            name="lastName"
            value={editUserData.lastName}
            onChange={handleEditUserDataChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="text"
            name="phone"
            value={editUserData.phone}
            onChange={handleEditUserDataChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            name="email"
            value={editUserData.email}
            onChange={handleEditUserDataChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditUserSave}>Save</Button>
        </DialogActions>
      </Dialog>

    </Box>
  )
}

export default User;
