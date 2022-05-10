import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from '../../../../../node_modules/notistack/dist/index';
import LoginForm from '../LoginForm/index';

Login.propTypes = {};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      //auto set username = email address

      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('new user:', user);
      enqueueSnackbar('Login success', {
        variant: 'success',
      });
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
