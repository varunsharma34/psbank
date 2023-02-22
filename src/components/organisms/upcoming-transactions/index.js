import { Box, Typography, Paper } from '@mui/material';
import Transactions from '../../molecules/transactions';
import { UpcomingTransactionTableHeadings } from '../../../realm/constants';

const UpcomingTransactions = ({ data }) => {
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
          Upcoming transactions
        </Typography>
      </Paper>
      <Transactions
        data={data}
        tableHeadings={UpcomingTransactionTableHeadings}
      />
    </Box>
  );
};

export default UpcomingTransactions;
