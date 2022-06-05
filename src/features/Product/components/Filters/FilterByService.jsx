import React from 'react';
import { Box, Checkbox, Typography } from '../../../../../node_modules/@mui/material/index';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

function FilterByService({ filter = {}, onChange }) {
  const handleServiceChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: 2 }}>
      <Typography>DỊCH VỤ</Typography>
      <FormControlLabel
        control={<Checkbox onChange={handleServiceChange} checked={Boolean(filter.isFreeShip)} />}
        label="Free Ship"
        name="isFreeShip"
      />
      <FormControlLabel
        control={<Checkbox onChange={handleServiceChange} checked={Boolean(filter.isPromotion)} />}
        label="Giảm giá"
        name="isPromotion"
      />
    </Box>
  );
}

export default FilterByService;
