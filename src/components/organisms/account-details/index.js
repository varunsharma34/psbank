import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import { Box, Grid, Typography, Paper, Alert, Button } from '@mui/material';
import getAccountAPI from '../../../graphql/getAccountAPI';
import createTransactionAPI from '../../../graphql/createTransactionAPI';
import AccountSummary from '../../molecules/account-summary';
import Transactions from '../../molecules/transactions';
import CreateTransaction from '../../molecules/create-transaction';
import updateAccountAPI from '../../../graphql/updateAccountAPI';
import { TransactionTableHeadings } from '../../../realm/constants';
import Loader from '../../atoms/loader';

const AccountDetail = () => {
  const [openCreateTransactionModal, setOpenCreateTransactionModal] =
    useState(false);
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);
  // console.log(user.customData);

  const [account, setAccount] = useState([]);
  const [isAccountLoading, setAccountLoading] = useState(true);
  const [createTransactionApiError, setCreateTransactionApiError] =
    useState(false);
  const params = useParams();

  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  const headers = { Authorization: `Bearer ${user._accessToken}` };
  const queryVariables = {
    id: params.id,
  };

  const loadAccount = async () => {
    const data = await getAccountAPI({ queryVariables, headers });

    console.log('accountdata: ', JSON.stringify(data));

    setAccount(data.account);
    setAccountLoading(false);
  };

  useEffect(() => {
    loadAccount();
  }, []);

  const handleModalClose = () => {
    setOpenCreateTransactionModal(!openCreateTransactionModal);
  };

  const createTransactionNumber = () => {
    return parseInt(Math.floor(Math.random() * 1000000000000) + 1);
  };

  const createTransactionFormSubmitHandler = async (
    createTransactionFormData
  ) => {
    try {
      const isBalanceAvailable =
        createTransactionFormData.amount <= account.balance;

      if (isBalanceAvailable) {
        const queryVariables = {
          data: {
            number: createTransactionNumber(),
            amount: parseInt(createTransactionFormData.amount),
            createdAt: new Date(),
            userId: user.id,
            source_account: account.number,
            destination_account: createTransactionFormData.destination_account,
            description: createTransactionFormData.description,
          },
        };
        const newTransactionData = await createTransactionAPI({
          queryVariables,
          headers,
        });

        const accountTransactionIds = account.transactions.map(
          (transaction) => transaction.number
        );
        const accountTrasactionsArray = [
          ...(accountTransactionIds || []),
          `${newTransactionData.insertOneTransaction.number}`,
        ];

        const updateAccountQueryVariables = {
          query: {
            number: account.number,
          },
          set: {
            balance:
              account.balance - newTransactionData.insertOneTransaction.amount,
            transactions: { link: accountTrasactionsArray },
          },
        };
        const updatedAccountData = await updateAccountAPI({
          updateAccountQueryVariables,
          headers,
        });

        handleModalClose();
        setAccount(updatedAccountData.updateOneAccount);
      } else {
        setCreateTransactionApiError(
          'Transaction amount exceeds available balance.'
        );
      }
    } catch (error) {
      setCreateTransactionApiError(error.error);
    }
  };

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
          Account Summary
        </Typography>
      </Paper>

      {isAccountLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2}>
            {account ? (
              <>
                <AccountSummary data={account} />
              </>
            ) : (
              <Grid item>
                <Alert severity='error'>No account detail found!</Alert>
              </Grid>
            )}
          </Grid>

          <Paper
            sx={{
              padding: '15px 20px',
              display: 'flex',
              margin: '20px 0',
              backgroundColor: '#f9f9f9',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: '10px',
            }}
          >
            <Typography variant='h5' sx={{ flex: '1' }}>
              Recent Transactions
            </Typography>
            <Button
              variant='contained'
              onClick={() => setOpenCreateTransactionModal(true)}
            >
              Make transaction
            </Button>
          </Paper>

          <CreateTransaction
            createTransactionFormSubmitHandler={
              createTransactionFormSubmitHandler
            }
            createTransactionApiError={createTransactionApiError}
            openCreateTransactionModal={openCreateTransactionModal}
            handleModalClose={handleModalClose}
          />

          {account && account.transactions && account.transactions.length ? (
            <Transactions
              data={account.transactions}
              tableHeadings={TransactionTableHeadings}
            />
          ) : (
            <Alert severity='error'>No transaction found!</Alert>
          )}
        </>
      )}
    </Box>
  );
};

export default AccountDetail;
