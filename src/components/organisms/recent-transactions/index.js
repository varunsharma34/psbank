import { Box, Typography, Paper } from '@mui/material';
import Transactions from '../../molecules/transactions';
import { TransactionTableHeadings } from '../../../realm/constants';

const RecentTransactions = ({ data }) => {
  return (
    <Box>
      <Paper
        sx={{
          padding: '15px 20px',
          display: 'flex',
          margin: '20px 0',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant='h5' sx={{ flex: '1' }}>
          Recent transactions
        </Typography>
      </Paper>
      <Transactions data={data} tableHeadings={TransactionTableHeadings} />
    </Box>
  );
};

export default RecentTransactions;
