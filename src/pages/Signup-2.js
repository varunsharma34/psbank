import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Grid, Button, Typography, Alert } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { UserContext } from '../contexts/user.context';
import PageContainer from '../components/molecules/container';

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'all' });
  // const onSubmit = (data) => console.log('Submit:', data);

  const navigate = useNavigate();
  const location = useLocation();
  const [apiError, setApiError] = useState();

  console.log('formData - ', errors);

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);

  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace('?redirectTo=', '');
    navigate(redirectTo ? redirectTo : '/');
  };

  // As explained in the Login page.
  const onSubmit = async (data) => {
    try {
      const user = await emailPasswordSignup({
        email: data.email,
        password: data.password,
      });
      if (user) {
        const mongo = user.mongoClient('mongodb-atlas');
        const collection = mongo.db('psbank').collection('users');
        // const filter = {
        //   userID: user.id, // Query for the user object of the logged in user
        // };
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
      setApiError(error);
    }
  };

  return (
    <PageContainer type='formpage'>
      <h1>Signup</h1>
      {apiError && (
        <Alert severity='error' sx={{ marginBottom: '20px' }}>
          {apiError.errorCode === 'AccountNameInUse'
            ? 'User already exist with this email.'
            : 'Signup failed. Please try again!'}
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
                  //   style={{ marginBottom: '1rem' }}
                  error={!!errors['email']}
                  helperText={errors['email'] ? errors['email'].message : ''}
                  {...register('email', {
                    required: 'Email is required', // JS only: <p>error message</p> TS only support string
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: 'Invalid email',
                    },
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
                    minLength: {
                      value: 8,
                      message: 'Minimum password length is 8',
                    },
                    maxLength: {
                      value: 16,
                      message: 'Maximum password length is 16',
                    },
                    pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='name'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  label='Name'
                  variant='outlined'
                  name='name'
                  error={!!errors['name']}
                  helperText={errors['name'] ? errors['name'].message : ''}
                  {...register('name', {
                    required: 'Name is required', // JS only: <p>error message</p> TS only support string
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='dob'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  type='date'
                  label='Date of birth'
                  variant='outlined'
                  name='dob'
                  InputLabelProps={{ shrink: true }}
                  error={!!errors['dob']}
                  helperText={errors['dob'] ? errors['dob'].message : ''}
                  {...register('dob', {
                    required: 'Date of birth is required', // JS only: <p>error message</p> TS only support string
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='phone'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  type='number'
                  label='Phone'
                  variant='outlined'
                  name='phone'
                  error={!!errors['phone']}
                  helperText={errors['phone'] ? errors['phone'].message : ''}
                  {...register('phone', {
                    required: 'Phone is required', // JS only: <p>error message</p> TS only support string
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='address'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  label='Address'
                  variant='outlined'
                  name='address'
                  error={!!errors['address']}
                  helperText={
                    errors['address'] ? errors['address'].message : ''
                  }
                  {...register('address', {
                    required: 'Address is required', // JS only: <p>error message</p> TS only support string
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='occupation'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  label='Occupation'
                  variant='outlined'
                  name='occupation'
                  error={!!errors['occupation']}
                  helperText={
                    errors['occupation'] ? errors['occupation'].message : ''
                  }
                  {...register('occupation', {
                    required: 'Occupation is required', // JS only: <p>error message</p> TS only support string
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='income'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  type='number'
                  label='Income'
                  variant='outlined'
                  name='income'
                  error={!!errors['income']}
                  helperText={errors['income'] ? errors['income'].message : ''}
                  {...register('income', {
                    required: 'Please provide your annual income', // JS only: <p>error message</p> TS only support string
                  })}
                />
              )}
              defaultValue=''
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='govt_id'
              control={control}
              render={() => (
                <TextField
                  fullWidth
                  label='Government ID'
                  variant='outlined'
                  name='govt_id'
                  error={!!errors['govt_id']}
                  helperText={
                    errors['govt_id'] ? errors['govt_id'].message : ''
                  }
                  {...register('govt_id', {
                    required: 'Please provide your government id number', // JS only: <p>error message</p> TS only support string
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
              Signup
            </Button>
          </Grid>

          <Grid item xs={12} marginBottom='20px'>
            <Typography>
              Already have an account? <Link to='/login'>Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  );
};

export default Signup;
