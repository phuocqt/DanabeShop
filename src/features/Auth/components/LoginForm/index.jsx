import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/inputField/index';
import PasswordField from 'components/form-controls/PasswordField/index';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
    width: 400,
    paddingBottom: 10,
  },

  avatar: {
    margin: '0 auto',
    // backgroundColor: primary.main,
  },

  title: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  progress: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
  },
}));
LoginForm.propTypes = {};
const schema = yup.object().shape({
  identifier: yup.string().required('Please enter your email.').email('Please enter an valid email address.'),
  password: yup.string().required('Please enter your password.'),
});
function LoginForm(props) {
  const classes = useStyles(props);
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar} sx={{ backgroundColor: 'secondary.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form}></InputField>
        <PasswordField name="password" label="Password" form={form}></PasswordField>

        <Button disable={isSubmitting} type="submit" variant="contained" color="primary" fullWidth size="large">
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
