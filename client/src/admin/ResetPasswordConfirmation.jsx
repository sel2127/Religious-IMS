import React from 'react';
import { Box, Typography } from '@mui/material';

const ResetPasswordConfirmation = () => {
  return (
    <Box m="100px" textAlign="center">
      <Typography variant="h5">Password Reset Successful</Typography>
      <Typography variant="body1">
        Your password has been successfully reset. You can now log in with your new password.
      </Typography>
    </Box>
  );
};

export default ResetPasswordConfirmation;