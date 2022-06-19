import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../cartSlice';

QuantityCartForm.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityCartForm(props) {
  const dispatch = useDispatch();
  const { form, name, disable, index } = props;
  const { control, setValue } = form;
  const quantity = useSelector((state) => state.cart.cartItems[index].quantity);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <Box>
          <FormControl
            margin="normal"
            variant="outlined"
            fullWidth
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <RemoveIcon
              sx={{ paddingRight: '10px' }}
              onClick={() => {
                const action = changeQuantity({
                  index,
                  quantity: quantity > 0 ? quantity - 1 : 0,
                });
                dispatch(action);
              }}
            />

            <TextField size="small" value={quantity} id={name} sx={{ maxWidth: '150px', minWidth: '50px' }} />
            <AddIcon
              sx={{ paddingLeft: '10px' }}
              onClick={() => {
                const action = changeQuantity({
                  index,
                  quantity: quantity >= 99 ? 99 : quantity + 1,
                });
                dispatch(action);
              }}
            />
          </FormControl>
        </Box>
      )}
    ></Controller>
  );
}

export default QuantityCartForm;
