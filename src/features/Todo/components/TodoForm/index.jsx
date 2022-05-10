import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    control,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState('');
  const { onSubmit } = props;
  function handleOnSubmit(data) {
    const formValue = {
      id: Math.random(),
      title: data.title,
      status: 'new',
    };
    onSubmit(formValue);
    resetField('title');
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Todos"
              variant="outlined"
              // errors={!!errors.title}
              helperText={errors.title && 'LOI'}
            />
          )}
        />
      </form>
    </div>
  );
}

export default TodoForm;
