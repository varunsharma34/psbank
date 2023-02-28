import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Grid, Button, Typography, Alert } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { UserContext } from '../contexts/user.context';
import PageContainer from '../components/molecules/container';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiError, setApiError] = useState();

  // We are consuming our user-management context to
  // get & set the user details here
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  // This function will redirect the user to the
  // appropriate page once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace('?redirectTo=', '');
    navigate(redirectTo ? redirectTo : '/home');
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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Here we are passing user details to our emailPasswordLogin
      // function that we imported from our realm/authentication.js
      // to validate the user credentials and login the user into our App.
      const user = await emailPasswordLogin(data.email, data.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      setApiError(error);
    }
  };

  console.log('Errors:', errors);

  return (
    <PageContainer type='formpage'>
      <h1>Login</h1>
      {apiError && (
        <Alert severity='error' sx={{ marginBottom: '20px' }}>
          Invalid username or password
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' spacing={2} justifyContent='center'>
          <Grid item xs={12}>
            <Controller
              name='email'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  label='Email'
                  variant='outlined'
                  name='email'
                  error={!!errors['email']}
                  helperText={errors['email'] ? errors['email'].message : ''}
                  {...register('email', {
                    required: 'Email is required',
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='password'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  type='password'
                  label='Password'
                  variant='outlined'
                  name='password'
                  error={!!errors['password']}
                  helperText={
                    errors['password'] ? errors['password'].message : ''
                  }
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              color='primary'
            >
              Login
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Don't have an account? <Link to='/signup'>Signup</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  );
};

export default Login;
