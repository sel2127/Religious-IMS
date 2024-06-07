import { useEffect, useState } from 'react';
import { Box, Badge, IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useTheme, useContext } from '@mui/material/styles';
import { tokens } from '../../theme';
import { ColorModeContext } from '../../contexts/ColorModeContext';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hasCurrentDayTodos, setHasCurrentDayTodos] = useState(false);

  useEffect(() => {
    const checkCurrentDayTodos = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await fetch(`http://localhost:5000/api/calendarevents?tododate=${today}`);
        const events = await response.json();
        setHasCurrentDayTodos(events.length > 0);
      } catch (error) {
        console.error('Failed to fetch current day events:', error);
      }
    };

    checkCurrentDayTodos();
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        {/* <InputBase sx={{ml: 2, flex: 1 }} placehlder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <Badge color="secondary" variant="dot" invisible={!hasCurrentDayTodos}>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;