import Modal from '../modal';
import {
  Button,
  Alert,
  DialogContent,
  DialogContentText,
  Stack,
} from '@mui/material';

const CreateCard = ({
  createCardFormSubmitHandler,
  createCardApiError,
  openCreateCardModal,
  handleModalClose,
  userData,
}) => {
  const userIncome =
    userData && userData.customData && parseInt(userData.customData.income);
  const isEligible =
    (userIncome &&
      (userIncome > 500000 || (userIncome < 500000 && userIncome > 200000))) ||
    0;
  const limit = userIncome > 500000 ? 150000 : 50000;
  console.log(userIncome);
  return (
    <Modal isOpen={openCreateCardModal} handleClose={handleModalClose}>
      <DialogContent>
        {createCardApiError && (
          <Alert severity='error' sx={{ marginBottom: '20px' }}>
            {createCardApiError}
          </Alert>
        )}
        {isEligible ? (
          <DialogContentText sx={{ marginBottom: '20px' }}>
            You are eligible for credit card with limit: INR {limit}
          </DialogContentText>
        ) : (
          <DialogContentText sx={{ marginBottom: '20px' }}>
            Based on your annual income, you are not eligible for credit card!!!
          </DialogContentText>
        )}

        <Stack direction='row' spacing={2}>
          {isEligible ? (
            <Button
              fullWidth
              onClick={() => createCardFormSubmitHandler(limit)}
              variant='contained'
            >
              Proceed
            </Button>
          ) : (
            ''
          )}
          <Button
            fullWidth
            onClick={() => handleModalClose()}
            variant='outlined'
          >
            Cancel
          </Button>
        </Stack>
      </DialogContent>
    </Modal>
  );
};

export default CreateCard;
