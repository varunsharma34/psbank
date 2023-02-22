import { Typography, Paper, Skeleton, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CURRENCY_SYMBOL } from '../../../realm/constants';

const CreditCard = ({ data }) => {
  const cardExpiry = new Date(data.expiry);
  const cardExpiryYear = cardExpiry.getUTCFullYear().toString().slice(2);
  const cardExpiryMonth = ('0' + (cardExpiry.getMonth() + 1)).slice(-2);
  return (
    <Link
      component={RouterLink}
      to={`/card/${data._id}`}
      sx={{ textDecoration: 'none' }}
    >
      <Paper
        sx={{
          padding: '20px',
          flex: '1',
          color: 'white',
          background:
            'linear-gradient(90deg, rgb(22 118 210) 0%, rgb(185 136 255) 100%)',
        }}
      >
        <Typography>Card Number</Typography>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
            letterSpacing: '8px',
            marginBottom: '20px',
          }}
        >
          {data.number}
        </Typography>

        <Typography>Available Credit</Typography>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
            letterSpacing: '2px',
            marginBottom: '20px',
          }}
        >
          {CURRENCY_SYMBOL}
          {data.balance}
        </Typography>

        <Grid container>
          <Grid item sx={{ flex: 1 }}>
            <Typography>Valid thru</Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              {cardExpiryMonth}/{cardExpiryYear}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Type</Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              {data.type}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default CreditCard;
