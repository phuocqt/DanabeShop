import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TestField from '../../../../components/form-controls/TestField';
import InputField from '../../../../components/form-controls/inputField';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 50,
  },

  avatar: {
    margin: '0 auto',
    // backgroundColor: primary.main,
  },

  title: {
    textAlign: 'center',
  },
}));
TestForm.propTypes = {};
const schema = yup.object().shape({
  test: yup.string().required('Please enter your password.').min(2, 'Please enter at least six characters.'),
});
function TestForm(props) {
  const classes = useStyles(props);
  const form = useForm({
    defaultValues: {
      fullName: '',
      test: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log(values);
    form.reset();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} sx={{ backgroundColor: 'secondary.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form}></InputField>
        <TestField name="test" label="test" form={form}></TestField>

        <Button type="submit" variant="contained" color="primary" fullWidth size="large">
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default TestForm;
