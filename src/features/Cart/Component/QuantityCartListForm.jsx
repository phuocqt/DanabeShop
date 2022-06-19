import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityCartForm from './QuantityCartForm';

const useStyles = makeStyles(() => ({
  root: {},

  avatar: {
    margin: '0 auto',
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
QuantityCartListForm.propTypes = {};
const schema = yup.object().shape({
  quantity: yup
    .number()
    .min(1, 'please enter at least 1')
    .required('Please chose the quantity')
    .typeError('Please enter a number'),
});
function QuantityCartListForm({ index, onChange }) {
  const classes = useStyles();
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <div className={classes.root}>
      <form onChange={form.handleSubmit(handleSubmit)}>
        <QuantityCartForm index={index} name="quantity" form={form}></QuantityCartForm>
      </form>
    </div>
  );
}

export default QuantityCartListForm;
