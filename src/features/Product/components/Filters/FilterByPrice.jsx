import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '../../../../../node_modules/@mui/material/index';

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleSubmit = () => {
    setValues({ salePrice_gte: values.salePrice_gte, salePrice_lte: values.salePrice_lte });
    onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  const handlePricedUpdate = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Box p={2}>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginBottom: 2 }}>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          size="small"
          variant="standard"
          onChange={handlePricedUpdate}
        />
        <Typography pr={2} pl={2}>
          -
        </Typography>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          size="small"
          variant="standard"
          onChange={handlePricedUpdate}
        />
      </Box>
      <Button variant="outlined" onClick={handleSubmit}>
        ÁP DỤNG
      </Button>
    </Box>
  );
}

export default FilterByPrice;
