import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant='h1' style={{ fontSize: '200px' }}>
        404
      </Typography>
      <Typography variant='h6'>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant='contained' href='/' style={{ marginTop: '50px' }}>
        Back Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
