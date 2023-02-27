import { Typography, Paper, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CURRENCY_SYMBOL } from '../../../realm/constants';

const AccountCard = ({ data }) => {
  return (
    <Link
      component={RouterLink}
      to={`/account/${data._id}`}
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
        <Typography>Account Number</Typography>
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
      </Paper>
    </Link>
  );
};

export default AccountCard;
