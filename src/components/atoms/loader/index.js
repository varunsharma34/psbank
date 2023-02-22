import { Skeleton, Container, Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Container fixed>
      <Grid
        item
        xs={12}
        display='flex'
        justifyContent='center'
        sx={{ marginTop: '20px' }}
      >
        <Grid item xs={12}>
          <Skeleton height={60} />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
