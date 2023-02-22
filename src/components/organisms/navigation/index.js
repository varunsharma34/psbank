import { useContext, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Logout, Home } from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import PageContainer from '../../molecules/container';

const Navigation = () => {
  const { user, logOutUser } = useContext(UserContext);
  const userDetails = (user && user.customData) || user;
  const [show, setShow] = useState(false);
  const logOut = async () => {
    await logOutUser();
    window.location.reload(true);
    return;
  };
  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShow((show) => !show);
  };
  return (
    <PageContainer>
      <AppBar position='fixed'>
        <Toolbar sx={{ gap: '16px' }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h6'
            component={Link}
            to='/'
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
          >
            PS Bank
          </Typography>

          {userDetails && (
            <>
              {userDetails.name && (
                <Typography
                  variant='body1'
                  sx={{ textDecoration: 'none', color: 'white' }}
                >
                  Welcome, {userDetails.name.split(' ')[0]}
                </Typography>
              )}
              <Button
                color='error'
                variant='contained'
                sx={{ display: { xs: 'none', md: 'block' } }}
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        show={show}
        setShow={setShow}
        toggleDrawer={toggleDrawer}
      />
    </PageContainer>
  );
};

const TemporaryDrawer = (props) => {
  const { show, toggleDrawer } = props;
  const { logOutUser } = useContext(UserContext);

  const logOut = async () => {
    await logOutUser();
    window.location.reload(true);
    return;
  };

  const navLinks = [
    {
      text: 'Home',
      Icon: Home,
      link: '/',
    },
    {
      text: 'Logout',
      Icon: Logout,
      action: logOut,
    },
  ];

  const DrawerList = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {navLinks.map(({ text, Icon, link, action }) => {
          return link ? (
            <Link
              to={link}
              style={{ textDecoration: 'none', color: 'inherit' }}
              key={text}
            >
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : (
            <ListItem button onClick={action} key={text}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={show} onClose={toggleDrawer}>
        {<DrawerList />}
      </Drawer>
    </div>
  );
};

export default Navigation;
