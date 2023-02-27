import { CssBaseline, Toolbar } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageContainer from './components/molecules/container';
import Navigation from './components/organisms/navigation';
import { UserProvider } from './contexts/user.context';

const PageNotFound = lazy(() => import('./pages/ErrorPage'));
const DashboardHOC = lazy(() => import('./pages/Dashboard-HOC'));
const Login = lazy(() => import('./pages/Login'));
const PrivateRoute = lazy(() => import('./pages/PrivateRoute'));
const Signup = lazy(() => import('./pages/Signup'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const CardPage = lazy(() => import('./pages/CardPage'));
// const Loader = lazy(() => import('./components/atoms/loader'));

function App() {
  return (
    <BrowserRouter>
      {/* We are wrapping our whole app with UserProvider so that */}
      {/* our user is accessible through out the app from any page*/}
      <UserProvider>
        <CssBaseline />
        <Navigation />
        <Toolbar />

        <Suspense fallback={<PageContainer></PageContainer>}>
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />

            {/* We are protecting our Home Page from unauthenticated */}
            {/* users by wrapping it with PrivateRoute here. */}
            <Route element={<PrivateRoute />}>
              <Route exact path='/' element={<DashboardHOC />} />
              <Route exact path='/account/:id' element={<AccountPage />} />
              <Route exact path='/card/:id' element={<CardPage />} />
            </Route>
          </Routes>
        </Suspense>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
