import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const PageContainer = ({ type, children }) => {
  //   const theme = useTheme();

  return (
    <Container fixed>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box width={type === 'formpage' ? 400 : '100%'}>{children}</Box>
      </Grid>
    </Container>
  );
};

PageContainer.defaultProps = {
  type: 'page',
};

export default PageContainer;
