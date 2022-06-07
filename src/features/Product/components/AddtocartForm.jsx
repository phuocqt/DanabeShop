import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PasswordField from 'components/form-controls/PasswordField/index';
import QuantityForm from 'components/form-controls/QuantityForm';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
    paddingBottom: 10,
  },

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
AddtocartForm.propTypes = {};
const schema = yup.object().shape({
  quantity: yup
    .number()
    .min(1, 'please enter at least 1')
    .required('Please chose the quantity')
    .typeError('Please enter a number'),
});
function AddtocartForm(props) {
  const classes = useStyles(props);
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    console.log(values);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityForm name="quantity" label="quantity" form={form}></QuantityForm>

        <Button type="submit" variant="contained" color="primary" fullWidth size="large">
          ADD TO CART
        </Button>
      </form>
    </div>
  );
}

export default AddtocartForm;
