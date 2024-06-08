// import { Box } from "@mui/material";
// import Header from "../../components/Header";
// import BarChart from "../../components/BarChart";

// const Bar = () => {
//   return (
//     <Box m="20px">
//       <Header title="Bar Chart" subtitle="Simple Bar Chart" />
//       <Box height="75vh">
//         <BarChart />
//       </Box>
//     </Box>
//   );
// };

// export default Bar;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const [userData, setUserData] = useState([]);
  const [donations, setDonations] = useState([]);

  // useEffect(() => {
  //   fetchUserData();
  // }, []);
  
  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/admin/users');
  //     setUserData(response.data.map(user => ({
  //       ...user,
  //       id: user.id.toString(), // Ensure ID is a string for DataGrid
  //     })));
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

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

  // const getWeekData = () => {
  //   // Group user data by week and count the number of users in each week
  //   const userCountByWeek = userData.reduce((acc, user) => {
  //     const createdAt = new Date(user.createdAt);
  //     const weekNumber = getWeekNumber(createdAt);
  //     acc[weekNumber] = (acc[weekNumber] || 0) + 1;
  //     return acc;
  //   }, {});

  //   // Convert the grouped data into an array of objects with 'week' and 'userCount' properties
  //   const weekData = Object.keys(userCountByWeek).map(weekNumber => ({
  //     week: `Week ${weekNumber}`,
  //     userCount: userCountByWeek[weekNumber],
  //   }));

  //   return weekData;
  // };
  
  const getDayData = () => {
    // Group user data by day and count the number of users in each day
    const userCountByDay = donations.reduce((acc, user) => {
      const createdAt = new Date(user.createdAt);
      const dayNumber = createdAt.getDate();
      acc[dayNumber] = (acc[dayNumber] || 0) + 1;
      return acc;
    }, {});
  
    // Convert the grouped data into an array of objects with 'day' and 'userCount' properties
    const dayData = Object.keys(userCountByDay).map(dayNumber => ({
      day: `Day ${dayNumber}`,
      donationsCount: userCountByDay[dayNumber],
    }));
  
    return dayData;
  };

  const getWeekNumber = (date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };

  return (
    <Box m="20px">
      <Header subtitle="Bar Chart" />
      <Box height="75vh">
      {/* <LineChart data={donations} xKey="createdAt" yKey="id" /> */}
      <BarChart data={getDayData()} xKey="day" yKey="donationsCount" />

      </Box>
    </Box>
  );
};

export default Bar;