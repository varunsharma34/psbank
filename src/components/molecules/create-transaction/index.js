import Modal from '../modal';
import {
  Grid,
  Button,
  Alert,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import Form from '../../organisms/form';
import CreateTransactionForm from '../../../form-structures/create-transaction';

const CreateTransaction = ({
  createTransactionFormSubmitHandler,
  createTransactionApiError,
  openCreateTransactionModal,
  handleModalClose,
}) => {
  return (
    <Modal isOpen={openCreateTransactionModal} handleClose={handleModalClose}>
      <DialogContent>
        {createTransactionApiError && (
          <Alert severity='error' sx={{ marginBottom: '20px' }}>
            {createTransactionApiError}
          </Alert>
        )}
        <DialogContentText sx={{ marginBottom: '20px' }}>
          Please provide details below:
        </DialogContentText>

        <Form
          data={CreateTransactionForm}
          formSubmitHandler={createTransactionFormSubmitHandler}
        >
          <Grid item xs={12}>
            <Button
              fullWidth
              size='large'
              variant='outlined'
              onClick={handleModalClose}
            >
              Cancel
            </Button>
          </Grid>
        </Form>
      </DialogContent>
    </Modal>
  );
};

export default CreateTransaction;
