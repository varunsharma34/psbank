import { useContext, useState } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { Box, Button, Grid, Typography, Paper, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import createCardAPI from '../../../graphql/createCardAPI';
import CreateCard from '../../molecules/create-card';
import CreditCard from '../../molecules/credit-card';

const CardList = ({ data }) => {
  const [openCreateCardModal, setOpenCreateCardModal] = useState(false);
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);
  // console.log(user.customData);
  const [cards, setCards] = useState(data);

  // const [cards, setCards] = useState([]);
  // const [isCardsLoading, setCardsLoading] = useState(true);
  const [createCardApiError, setCreateCardApiError] = useState();

  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  const headers = { Authorization: `Bearer ${user._accessToken}` };

  const handleModalClose = () => {
    setOpenCreateCardModal(!openCreateCardModal);
  };

  const createCardNumber = () => {
    return parseInt(Math.floor(Math.random() * 10000000000000000) + 1);
  };

  const createCVVNumber = () => {
    return parseInt(Math.floor(Math.random() * 1000) + 1);
  };

  const createCardExpiryDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    return new Date(year + 3, month, day);
  };

  const createCardForm = useForm();

  const createCardFormSubmitHandler = async (limit) => {
    try {
      const queryVariables = {
        data: {
          type: limit === 50000 ? 'Gold' : 'Platinum',
          annualCharges: limit === 50000 ? 1000 : 2500,
          limit: limit,
          balance: limit,
          createdAt: new Date(),
          currency: 'INR',
          number: createCardNumber(),
          cvv: createCVVNumber(),
          expiry: createCardExpiryDate(),
          userId: user.id,
          name: user.name,
        },
      };

      const createdCard = await createCardAPI({
        queryVariables,
        headers,
      });

      handleModalClose();
      setCards([...cards, createdCard.insertOneCard]);
    } catch (error) {
      setCreateCardApiError(error);
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
          Cards
        </Typography>
        <Button variant='outlined' onClick={() => setOpenCreateCardModal(true)}>
          Create card
        </Button>
      </Paper>

      <CreateCard
        userData={user}
        createCardForm={createCardForm}
        createCardFormSubmitHandler={createCardFormSubmitHandler}
        createCardApiError={createCardApiError}
        openCreateCardModal={openCreateCardModal}
        handleModalClose={handleModalClose}
      />

      <Grid container spacing={2}>
        {cards.length ? (
          cards.map((card) => (
            <Grid item xs={12} md={6} lg={4} key={card._id}>
              <CreditCard data={card} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Alert severity='error'>No card found!</Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

CardList.defaultProps = {
  data: [],
};

export default CardList;
