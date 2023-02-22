import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import { Box, Grid, Typography, Paper, Alert, Button } from '@mui/material';
import getCardAPI from '../../../graphql/getCardAPI';
import createTransactionAPI from '../../../graphql/createTransactionAPI';
import CardSummary from '../../molecules/card-summary';
import Transactions from '../../molecules/transactions';
import CreateTransaction from '../../molecules/create-transaction';
import updateCardAPI from '../../../graphql/updateCardAPI';
import { TransactionTableHeadings } from '../../../realm/constants';
import Loader from '../../atoms/loader';

const CardDetail = () => {
  const [openCreateTransactionModal, setOpenCreateTransactionModal] =
    useState(false);
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);
  // console.log(user.customData);

  const [card, setCard] = useState([]);
  const [isCardLoading, setCardLoading] = useState(true);
  const [createTransactionApiError, setCreateTransactionApiError] =
    useState(false);
  const params = useParams();

  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  const headers = { Authorization: `Bearer ${user._accessToken}` };
  const queryVariables = {
    id: params.id,
  };

  const loadCard = async () => {
    const data = await getCardAPI({ queryVariables, headers });

    console.log('Card data: ', JSON.stringify(data));

    setCard(data.card);
    setCardLoading(false);
  };

  useEffect(() => {
    loadCard();
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
        createTransactionFormData.amount <= card.balance;

      if (isBalanceAvailable) {
        const queryVariables = {
          data: {
            number: createTransactionNumber(),
            amount: parseInt(createTransactionFormData.amount),
            createdAt: new Date(),
            userId: user.id,
            source_account: card.number,
            destination_account: createTransactionFormData.destination_account,
            description: createTransactionFormData.description,
          },
        };
        const newTransactionData = await createTransactionAPI({
          queryVariables,
          headers,
        });

        const cardTransactionIds = card.transactions.map(
          (transaction) => transaction.number
        );
        const accountTrasactionsArray = [
          ...(cardTransactionIds || []),
          `${newTransactionData.insertOneTransaction.number}`,
        ];

        const updateCardQueryVariables = {
          query: {
            number: card.number,
          },
          set: {
            balance:
              card.balance - newTransactionData.insertOneTransaction.amount,
            transactions: { link: accountTrasactionsArray },
          },
        };
        const updatedCardData = await updateCardAPI({
          updateCardQueryVariables,
          headers,
        });

        handleModalClose();
        setCard(updatedCardData.updateOneCard);
      } else {
        setCreateTransactionApiError(
          'Transaction amount exceeds available credit.'
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
          Card Summary
        </Typography>
      </Paper>

      {isCardLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2}>
            {card ? (
              <>
                <CardSummary data={card} />
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

          {card && card.transactions && card.transactions.length ? (
            <Transactions
              data={card.transactions}
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

export default CardDetail;
