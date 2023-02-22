import { CssBaseline, Toolbar } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar.component';
import Navigation from './components/organisms/navigation';
import { UserProvider } from './contexts/user.context';
import PageNotFound from './pages/ErrorPage';
import DashboardHOC from './pages/Dashboard-HOC';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import Signup from './pages/Signup';
import AccountPage from './pages/AccountPage';
import CardPage from './pages/CardPage';

function App() {
  return (
    <BrowserRouter>
      {/* We are wrapping our whole app with UserProvider so that */}
      {/* our user is accessible through out the app from any page*/}
      <UserProvider>
        <CssBaseline />
        <Navigation />
        <Toolbar />

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
            {/* <Route exact path='/new' element={<CreateAccount />} />
            <Route exact path='/analytics' element={<Analytics />} /> */}
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
