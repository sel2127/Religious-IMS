import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import Line from "../line";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { saveAs } from "file-saver";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonation, fetchEvents, fetchFeedbackCount, fetchUsersCount ,fetchMembers} from "../../../app/actions/feedbackAction";
import { donations } from './../../data/mockData';
import Pie from "../pie";
import Bar from "../bar";
import html2canvas from 'html2canvas';

const Dashboard = () => {
  const dispatch=useDispatch();
  //get number of feedback
  const fcount=useSelector(state=>state.feedback.fcount)
 useEffect(()=>{
  dispatch(fetchFeedbackCount());
 },[dispatch])
 //get number of users joined
 const usercount=useSelector(state=>state.feedback.ucount);
 useEffect(()=>{
  dispatch(fetchUsersCount());
 },[dispatch])
 //get number of donation
 const donations=useSelector(state=>state.feedback.dcount);
 useEffect(()=>{
  dispatch(fetchDonation());
 },[dispatch])
 //get number of evetns uploaded
 const eventuploaded=useSelector(state=>state.feedback.ecount);
 useEffect(()=>{
dispatch(fetchEvents());
 },[dispatch])
 const membersJoined=useSelector(state=>state.feedback.membercount);
 useEffect(()=>{
  dispatch(fetchMembers());
 },[dispatch])
 
  const downloadPdf = () => {
   
  };
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dashboardRef = useRef(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/users');
        setTotalUsers(response.data.length);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalUsers();
  }, []);

  // useEffect(() => {
  //   const fetchTotalEvents = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/admin/events');
  //       setTotalEvents(response.data.length);
  //     } catch (error) {
  //       console.error('Error fetching total users:', error);
  //     }
  //   };

  //   fetchTotalEvents();
  // }, []);

  const handleDownloadReports = () => {
    html2canvas(dashboardRef.current, {
      useCORS: true,
      allowTaint: true,
      scale: 2, // Adjust the scale factor for higher resolution
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'dashboard-screenshot.png';
      link.href = imgData;
      link.click();
    });
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[400],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleDownloadReports}
            
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        ref={dashboardRef}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={membersJoined}
            subtitle="Members Joined"
            progress="0.75"
            increase="+14%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={donations}
            subtitle="Donations Received"
            progress="0.50"
            increase="+21%"
            icon={
              <VolunteerActivismOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={fcount}
            subtitle="Feedbacks Received"
            progress="0.30"
            increase="+5%"
            icon={
              <ChatBubbleOutlineOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={eventuploaded}
            subtitle="Events Uploaded"
            progress="0.80"
            increase="+43%"
            icon={
              <EventOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h2"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Users
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography> */}
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/* <LineChart isDashboard={true} /> */}
            <Line isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          {/* <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          p="30px"
        > */}
          <Typography variant="h5" fontWeight="600" mt="25px" ml="10px">
            Donations
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            // mt="25px"
          >
            {/* <ProgressCircle size="125" /> */}
            <Pie isDashboard={true} />

            {/* <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              1400 Members Joined
            </Typography> */}
            {/* <Typography>Includes </Typography> */}
          </Box>
        {/* </Box> */}
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box> */}
          {/* {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))} */}
        </Box>

        {/* ROW 3 */}
        {/* <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Donations
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            // mt="25px"
          >
            <ProgressCircle size="125" />
            <Bar isDashboard={true} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {usercount} Members Joined
            </Typography>
          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Feedbacks
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;