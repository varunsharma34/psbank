import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { Box, Button, Grid, Typography, Paper, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import AccountCard from '../../molecules/account-card';
import CreateAccount from '../../molecules/create-account';
import getAccountsAPI from '../../../graphql/getAccountsAPI';
import createAccountAPI from '../../../graphql/createAccountAPI';

const AccountList = ({ data }) => {
  const [openCreateAccountModal, setOpenCreateAccountModal] = useState(false);
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);
  // console.log(user.customData);
  const [accounts, setAccounts] = useState(data);

  // const [accounts, setAccounts] = useState([]);
  // const [isAccountsLoading, setAccountsLoading] = useState(true);
  const [createAccountApiError, setCreateAccountApiError] = useState();

  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  const headers = { Authorization: `Bearer ${user._accessToken}` };

  // const loadAccounts = async () => {
  //   const data = await getAccountsAPI({ headers });

  //   setAccounts((_) =>
  //     data.accounts.map((account) => ({
  //       ...account,
  //       key: account._id,
  //       afterUpdate,
  //     }))
  //   );
  //   setAccountsLoading(false);
  // };

  // useEffect(() => {
  //   loadAccounts();
  // }, []);

  // // Helper function to be performed after an account has been created.
  // const afterUpdate = () => {
  //   loadAccounts();
  // };

  const handleModalClose = () => {
    setOpenCreateAccountModal(!openCreateAccountModal);
  };

  const createAccountNumber = () => {
    return parseInt(Math.floor(Math.random() * 10000000000) + 1);
  };

  const createAccountForm = useForm();

  const createAccountFormSubmitHandler = async (createAccountFormData) => {
    try {
      if (
        createAccountFormData.type === 'premium' &&
        createAccountFormData.balance < 10000
      ) {
        setCreateAccountApiError(
          'Minimum amount to be credited for premium account is Rs.10000'
        );
      } else {
        const queryVariables = {
          data: {
            type: createAccountFormData.type,
            balance: parseInt(createAccountFormData.balance),
            createdAt: new Date(),
            currency: 'INR',
            number: createAccountNumber(),
            userId: user.id,
          },
        };

        const createdAccount = await createAccountAPI({
          queryVariables,
          headers,
        });

        handleModalClose();
        // loadAccounts();
        setAccounts([...accounts, createdAccount.insertOneAccount]);
      }
    } catch (error) {
      setCreateAccountApiError(error);
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
          Accounts
        </Typography>
        <Button
          variant='outlined'
          onClick={() => setOpenCreateAccountModal(true)}
        >
          Create account
        </Button>
      </Paper>

      <CreateAccount
        createAccountForm={createAccountForm}
        createAccountFormSubmitHandler={createAccountFormSubmitHandler}
        createAccountApiError={createAccountApiError}
        openCreateAccountModal={openCreateAccountModal}
        handleModalClose={handleModalClose}
      />

      <Grid container spacing={2}>
        {accounts.length ? (
          accounts.map((account) => (
            <Grid item xs={12} md={6} lg={4} key={account._id}>
              <AccountCard data={account} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Alert severity='error'>No account found!</Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

AccountList.defaultProps = {
  data: [],
};

export default AccountList;
