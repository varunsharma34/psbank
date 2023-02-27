import { Typography, Paper, Grid } from '@mui/material';
import { CURRENCY_SYMBOL } from '../../../realm/constants';

const CardSummary = ({ data }) => {
  const createdOnDate = new Date(data.createdAt);
  const createdOnYear = createdOnDate.getUTCFullYear().toString().slice(2);
  const createdOnMonth = ('0' + (createdOnDate.getMonth() + 1)).slice(-2);

  const cardExpiry = new Date(data.expiry);
  const cardExpiryYear = cardExpiry.getUTCFullYear().toString().slice(2);
  const cardExpiryMonth = ('0' + (cardExpiry.getMonth() + 1)).slice(-2);

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
            <Typography>Available Credit</Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              {CURRENCY_SYMBOL} {data.balance}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Credit limit</Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              {CURRENCY_SYMBOL} {data.limit}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Card Number</Typography>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', letterSpacing: '8px' }}
            >
              {data.number}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Card Type</Typography>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                textTransform: 'capitalize',
              }}
            >
              {CURRENCY_SYMBOL} {data.type}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Valid from</Typography>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                textTransform: 'capitalize',
              }}
            >
              {createdOnMonth}/{createdOnYear}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Valid thru</Typography>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                textTransform: 'capitalize',
              }}
            >
              {cardExpiryMonth}/{cardExpiryYear}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Annual charges</Typography>
            <Typography variant='h6' sx={{ letterSpacing: '1px' }}>
              {CURRENCY_SYMBOL} {data.annualCharges}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography>Currency</Typography>
            <Typography variant='h6' sx={{ letterSpacing: '1px' }}>
              {CURRENCY_SYMBOL} {data.currency}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CardSummary;
