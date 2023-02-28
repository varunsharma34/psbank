import { Typography, Paper, Grid } from '@mui/material';
import { CURRENCY_SYMBOL } from '../../../realm/constants';

const AccountSummary = ({ data }) => {
  const createdOnDate = new Date(data.createdAt);
  const createdOn = `${createdOnDate.getDate()}/${
    createdOnDate.getMonth() + 1
  }/${createdOnDate.getFullYear()}`;

  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          flex: '1',
          color: 'white',
          background:
            'linear-gradient(90deg, rgb(22 118 210) 0%, rgb(185 136 255) 100%)',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography>Balance</Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              {CURRENCY_SYMBOL}
              {data.balance}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Account Number</Typography>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', letterSpacing: '8px' }}
            >
              {data.number}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Account Type</Typography>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '1px',
                textTransform: 'capitalize',
              }}
            >
              {data.type}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Created On</Typography>
            <Typography variant='h6' sx={{ letterSpacing: '1px' }}>
              {createdOn}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

AccountSummary.defaultProps = {
  data: {},
};

export default AccountSummary;
