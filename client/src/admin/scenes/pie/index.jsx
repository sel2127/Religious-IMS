// import { Box } from "@mui/material";
// import Header from "../../components/Header";
// import PieChart from "../../components/PieChart";

// const Pie = () => {
//   return (
//     <Box m="20px">
//       <Header title="Pie Chart" subtitle="Simple Pie Chart" />
//       <Box height="75vh">
//         <PieChart />
//       </Box>
//     </Box>
//   );
// };

// export default Pie;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Line = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);
  
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/users');
      setUserData(response.data.map(user => ({
        ...user,
        id: user.id.toString(), // Ensure ID is a string for DataGrid
      })));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const getPieChartData = () => {
    // Group user data by week and count the number of users in each week
    const userCountByWeek = userData.reduce((acc, user) => {
      const createdAt = new Date(user.createdAt);
      const weekNumber = getWeekNumber(createdAt);
      acc[weekNumber] = (acc[weekNumber] || 0) + 1;
      return acc;
    }, {});

    // Convert the grouped data into an array of objects with 'name' and 'value' properties
    const pieChartData = Object.keys(userCountByWeek).map(weekNumber => ({
      name: `Week ${weekNumber}`,
      value: userCountByWeek[weekNumber],
    }));

    return pieChartData;
  };

  const getWeekNumber = (date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };

  return (
    <Box m="20px">
      <Header subtitle="Pie Chart" />
      <Box height="75vh">
        <PieChart data={getPieChartData()} nameKey="name" valueKey="value" />
      </Box>
    </Box>
  );
};

export default Line;