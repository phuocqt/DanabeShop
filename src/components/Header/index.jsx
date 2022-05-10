import { Close } from '@mui/icons-material';
import { default as AccountCircle, default as AccountCircleIcon } from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Slide from '@mui/material/Slide';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Login from 'features/Auth/components/Login/index';
import { logout } from 'features/Auth/userSlice';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  dialog: {
    display: 'block',
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Header() {
  const loggedinID = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedinID.id;
  const classes = useStyles();
  const [mode, setMode] = useState('LOGIN');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log('logout');

    setAnchorEl(null);
    const action = logout();
    dispatch(action);
  };

  const menuOpen = Boolean(anchorEl);
  const id = menuOpen ? 'simple-popover' : undefined;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <Link to="/" className={classes.link}>
              <PrecisionManufacturingOutlinedIcon />
            </Link>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/" className={classes.link}>
              Danabee
            </Link>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavLink to="/todos" activeClassName="active-menu" className={classes.link}>
              <Button color="inherit">Todos</Button>
            </NavLink>
            <NavLink to="/albums" activeClassName="active-menu" className={classes.link}>
              <Button color="inherit">Albums</Button>
            </NavLink>
            {isLoggedIn && (
              <IconButton
                color="inherit"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <AccountCircleIcon />
              </IconButton>
            )}
            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen}>
                LOGIN
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Popover
        id={id}
        open={menuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem sx={{ p: 2 }} onClick={handleMenuClose}>
          My account
        </MenuItem>
        <MenuItem sx={{ p: 2 }} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Popover>
      <Dialog
        disableEscapeKeyDown
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <Close className={classes.closeBtn} onClick={handleClose} />

        <DialogContent className={classes.dialog}>
          {mode === 'LOGIN' && (
            <Box>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode('REGISTER')}>
                  DON'T HAVE A ACCOUNT. REGISTER HERE
                </Button>
              </Box>
            </Box>
          )}
          {mode === 'REGISTER' && (
            <Box textAlign="center">
              <Register closeDialog={handleClose} />
              <Button onClick={() => setMode('LOGIN')}>HAVE A ACCOUNT. LOGIN HERE</Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
