import { useContext, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';
import Form from '../components/organisms/form';
import SignupForm from '../form-structures/signup';
import { Grid, Typography, Alert } from '@mui/material';
import PageContainer from '../components/molecules/container';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signupFormError, setSignupFormError] = useState();

  const { emailPasswordSignup } = useContext(UserContext);

  const redirectNow = () => {
    const redirectTo = location.search.replace('?redirectTo=', '');
    navigate(redirectTo ? redirectTo : '/');
  };

  const formSubmitHandler = async (data) => {
    try {
      const user = await emailPasswordSignup({
        email: data.email,
        password: data.password,
      });
      if (user) {
        const mongo = user.mongoClient('mongodb-atlas');
        const collection = mongo.db('psbank').collection('users');
        const updateDoc = {
          userID: user.id,
          dob: data.dob,
          name: data.name,
          address: data.address,
          govtId: data.govt_id,
          income: data.income,
          phone: data.phone,
        };
        const result = await collection.insertOne(updateDoc);
        console.log(result);

        const customUserData = await user.refreshCustomData();
        console.log(customUserData);

        redirectNow();
      }
    } catch (error) {
      const errorMessage =
        error.errorCode === 'AccountNameInUse'
          ? `User already exist with email : ${data.email}`
          : 'Signup failed. Please try again!';

      setSignupFormError(errorMessage);
    }
  };

  return (
    <PageContainer type='formpage'>
      <h1>Signup</h1>
      {signupFormError && (
        <Alert severity='error' sx={{ marginBottom: '20px' }}>
          {signupFormError}
        </Alert>
      )}
      <Form data={SignupForm} formSubmitHandler={formSubmitHandler}>
        <Grid item xs={12} marginBottom='20px'>
          <Typography>
            Already have an account? <Link to='/login'>Login</Link>
          </Typography>
        </Grid>
      </Form>
    </PageContainer>
  );
};

export default Signup;
