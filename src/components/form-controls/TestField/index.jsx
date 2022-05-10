import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';

TestField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function TestField(props) {
  const { form, name, label, disable } = props;
  const { control } = form;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <div>
          <FormControl
            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
          >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
              value={value}
              label={label}
              id={name}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <FormHelperText error={error}>{error?.message}</FormHelperText>
          </FormControl>
        </div>
      )}
    ></Controller>
  );
}

export default TestField;
