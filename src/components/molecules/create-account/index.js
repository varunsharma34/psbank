import Modal from '../modal';
import {
  Grid,
  Button,
  Alert,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import Form from '../../organisms/form';
import CreateAccountForm from '../../../form-structures/create-account';

const CreateAccount = ({
  createAccountFormSubmitHandler,
  createAccountApiError,
  openCreateAccountModal,
  handleModalClose,
}) => {
  return (
    <Modal isOpen={openCreateAccountModal} handleClose={handleModalClose}>
      <DialogContent>
        {createAccountApiError && (
          <Alert severity='error' sx={{ marginBottom: '20px' }}>
            {createAccountApiError}
          </Alert>
        )}
        <DialogContentText sx={{ marginBottom: '20px' }}>
          Please provide details below:
        </DialogContentText>

        <Form
          data={CreateAccountForm}
          formSubmitHandler={createAccountFormSubmitHandler}
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

export default CreateAccount;
