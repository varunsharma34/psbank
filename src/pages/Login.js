import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';
import Form from '../components/organisms/form';
import LoginForm from '../form-structures/login';
import { Grid, Typography, Alert } from '@mui/material';
import PageContainer from '../components/molecules/container';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginFormError, setLoginFormError] = useState();

  // We are consuming our user-management context to
  // get & set the user details here
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  // This function will redirect the user to the
  // appropriate page once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace('?redirectTo=', '');
    navigate(redirectTo ? redirectTo : '/');
  };

  // Since there can be chances that the user is already logged in
  // but whenever the app gets refreshed the user context will become
  // empty. So we are checking if the user is already logged in and
  // if so we are redirecting the user to the home page.
  // Otherwise we will do nothing and let the user to login.
  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        // Redirecting them once fetched.
        redirectNow();
      }
    }
  };

  // This useEffect will run only once when the component is mounted.
  // Hence this is helping us in verifying whether the user is already logged in
  // or not.
  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formSubmitHandler = async (data) => {
    try {
      // Here we are passing user details to our emailPasswordLogin
      // function that we imported from our realm/authentication.js
      // to validate the user credentials and login the user into our App.
      const user = await emailPasswordLogin(data.email, data.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      setLoginFormError(error.error);
    }
  };

  return (
    <PageContainer type='formpage'>
      <h1>{LoginForm.formName}</h1>
      {loginFormError && (
        <Alert severity='error' sx={{ marginBottom: '20px' }}>
          {loginFormError}
        </Alert>
      )}
      <Form data={LoginForm} formSubmitHandler={formSubmitHandler}>
        <Grid item xs={12} marginBottom='20px'>
          <Typography>
            Already have an account? <Link to='/signup'>Signup</Link>
          </Typography>
        </Grid>
      </Form>
    </PageContainer>
  );
};

export default Login;
